/**
 * @module TASK_SERVICE
 */
import Task from '../../entity/task.model';
import * as taskRepo from './memory.repository';

export const getAllByBoardId = (id: string): Promise<Task[]> =>
  taskRepo.getAllByBoardId(id);

export const getById = (taskId: string): Promise<Task|undefined> =>
  taskRepo.getById(taskId);

export const createTaskById = (
  obj: Task,
  boardId: string
): Promise<Task | undefined> => taskRepo.createTaskById(obj, boardId);

export const updateTaskById = (obj: Task, taskId: string): Promise<Task|undefined> =>
  taskRepo.updateTaskById(obj, taskId);

export const deleteTaskById = (taskId: string): Promise<void> =>
  taskRepo.deleteTaskById(taskId);

export const deleteTasks = (id: string): Promise<Task[]> =>
  taskRepo.deleteTasks(id);

export const removeUsersId = (id: string): Promise<void> =>
  taskRepo.removeUsersId(id);
