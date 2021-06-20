import { Task } from '../../entity/task.model';
import { getRepository } from 'typeorm';

export const getAllByBoardId = async (id: string): Promise<Task[]> => {
  const taskRepo = getRepository(Task);
  const findTasks = await taskRepo.find({where:{boardId: id}})
  return findTasks;
};

export const getById = async (taskId: string): Promise<Task|undefined> => {
  const taskRepo = getRepository(Task);
  const find = await taskRepo.findOne({where: {id: taskId}});
  return find;
};

export const createTaskById = async (
  obj: Task,
  boardId: string
): Promise<Task> => {
  console.log('inside')
  const taskRepo = getRepository(Task);
  const newTask = await taskRepo.create({...obj, boardId});
  const savedTask = await taskRepo.save(newTask)
  return savedTask;
};

export const updateTaskById = async (
  obj: Task,
  taskId: string
): Promise<Task|undefined> => {
  console.log('inside')
  const taskRepo = getRepository(Task);
  await taskRepo.update(taskId, obj);
  return await taskRepo.findOne(taskId);
};

export const deleteTaskById = async (taskId: string): Promise<void> => {
  console.log('inside')
  const taskRepo = getRepository(Task);
  await taskRepo.delete(taskId);
  await taskRepo.find({where:{}})
};

export const deleteTasks = async (id: string): Promise<Task[]> => {
  console.log('inside')
  const taskRepo = getRepository(Task);
  await taskRepo.delete(id);
  return await taskRepo.find({where:{}})
};

export const removeUsersId = async (id: string): Promise<void> => {
  console.log('inside')
  const taskRepo = getRepository(Task);
  await taskRepo.update({userId: id}, {userId: null});
};
