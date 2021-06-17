import { ITask } from '../../interfaces/index';
import Task from './task.model';
import { db } from '../../common/db';

export const getAllByBoardId = async (id: string): Promise<ITask[]> => {
  const findTasks = db.tasks.filter((el) => el.boardId === id);
  return findTasks;
};

export const getById = async (taskId: string): Promise<ITask> => {
  const find = db.tasks.find((el) => el.id === taskId);
  return find as ITask;
};

export const createTaskById = async (
  obj: ITask,
  boardId: string
): Promise<ITask> => {
  const newTask: ITask = new Task({ ...obj, boardId });
  db.tasks.push(newTask);
  return getById(newTask.id);
};

export const updateTaskById = async (
  obj: ITask,
  taskId: string
): Promise<ITask|undefined> => {
  const findTask = db.tasks.find((el) => el.id === taskId);
  Object.assign(findTask, obj);
  return findTask;
};

export const deleteTaskById = async (taskId: string): Promise<ITask[]> => {
  const findTaskIndex = db.tasks.findIndex((el) => el.id === taskId);
  db.tasks.splice(findTaskIndex, 1);
  return db.tasks;
};

export const deleteTasks = async (id: string): Promise<ITask[]> => {
  db.tasks = db.tasks.filter((el) => el.boardId !== id);
  return db.tasks;
};

export const removeUsersId = async (id: string): Promise<void> => {
  db.tasks.forEach((el) => {
    if (el.userId === id) {
      const newObj = { ...el, userId: null };
      Object.assign(el, newObj);
    }
  });
};
