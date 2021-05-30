import { ITask } from '../../interfaces/interfaces';
import Task from './task.model';

let tasks: ITask[] = [];

export const getAllByBoardId = async (id: string): Promise<ITask[]> => {
  const findTasks = tasks.filter((el) => el.boardId === id);
  return findTasks.map(Task.toResponse);
};

export const getById = async (taskId: string): Promise<ITask> => {
  const find = tasks.find((el) => el.id === taskId);
  return find as ITask;
};

export const createTaskById = async (
  obj: ITask,
  boardId: string
): Promise<ITask> => {
  const newTask: ITask = new Task({ ...obj, boardId });
  tasks.push(newTask);
  return getById(newTask.id);
};

export const updateTaskById = async (
  obj: ITask,
  taskId: string
): Promise<ITask> => {
  const findTask = tasks.find((el) => el.id === taskId);
  Object.assign(findTask, obj);
  return Task.toResponse(findTask as ITask);
};

export const deleteTaskById = async (taskId: string): Promise<ITask[]> => {
  const findTaskIndex = tasks.findIndex((el) => el.id === taskId);
  tasks.splice(findTaskIndex, 1);
  return tasks.map(Task.toResponse);
};

export const deleteTasks = async (id: string): Promise<ITask[]> => {
  tasks = tasks.filter((el) => el.boardId !== id);
  return tasks.map(Task.toResponse);
};

export const removeUsersId = async (id: string): Promise<void> => {
  tasks.forEach((el) => {
    if (el.userId === id) {
      const newObj = { ...el, userId: null };
      Object.assign(el, newObj);
    }
  });
};
