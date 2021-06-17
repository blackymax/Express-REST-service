/**
 * @module TASK_SERVICE
 */
import { ITask } from '../../interfaces';
import * as taskRepo from './task.memory.repository';

export const getAllByBoardId = (id: string): Promise<ITask[]> =>
  taskRepo.getAllByBoardId(id);

export const getById = (taskId: string): Promise<ITask> =>
  taskRepo.getById(taskId);

export const createTaskById = (
  obj: ITask,
  boardId: string
): Promise<ITask | undefined> => taskRepo.createTaskById(obj, boardId);

export const updateTaskById = (obj: ITask, taskId: string): Promise<ITask|undefined> =>
  taskRepo.updateTaskById(obj, taskId);

export const deleteTaskById = (taskId: string): Promise<ITask[]> =>
  taskRepo.deleteTaskById(taskId);

export const deleteTasks = (id: string): Promise<ITask[]> =>
  taskRepo.deleteTasks(id);

export const removeUsersId = (id: string): Promise<void> =>
  taskRepo.removeUsersId(id);
