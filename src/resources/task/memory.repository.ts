import { Task } from '../../entity/task.model';
import { getRepository } from 'typeorm';

export const getAllByBoardId = async (id: string): Promise<Task[]> => {
  const taskRepo = getRepository(Task);
  const findTasks = await taskRepo.find({where:{boardId: id}})
  return findTasks;
};

export const getById = async (taskId: string): Promise<Task|undefined> => {
  const taskRepo = getRepository(Task);
  return taskRepo.findOne({where: {id: taskId}});
};

export const createTaskById = async (
  obj: Task,
  boardId: string
): Promise<Task> => {
  const taskRepo = getRepository(Task);
  const newTask = taskRepo.create({...obj, boardId});
  return taskRepo.save(newTask)
};

export const updateTaskById = async (
  obj: Task,
  taskId: string
): Promise<Task|undefined> => {
  const taskRepo = getRepository(Task);
  await taskRepo.update(taskId, obj);
  return taskRepo.findOne(taskId);
};

export const deleteTaskById = async (taskId: string): Promise<void> => {
  const taskRepo = getRepository(Task);
  await Promise.all([
    await taskRepo.delete(taskId),
    await taskRepo.find({where:{}})
  ])
};

export const deleteTasks = async (id: string): Promise<Task[]> => {
  const taskRepo = getRepository(Task);
  await taskRepo.delete(id);
  return taskRepo.find({where:{}})
};

export const removeUsersId = async (id: string): Promise<void> => {
  const taskRepo = getRepository(Task);
  await taskRepo.update({userId: id}, {userId: null});
};
