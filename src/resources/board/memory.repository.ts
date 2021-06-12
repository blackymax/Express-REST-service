import { IBoard } from '../../interfaces';
import * as taskRepo from '../task/task.service';
import Board from './model';
import { db } from '../db';

export const getAll = async (): Promise<IBoard[]> =>
  db.boards.map(Board.toResponse);
export const createBoard = async (obj: IBoard): Promise<IBoard> => {
  db.boards.push(obj);
  return Board.toResponse(db.boards[db.boards.length - 1] as IBoard);
};
export const getById = async (
  id: string | undefined
): Promise<IBoard | undefined> => {
  const find = db.boards.find((el) => el.id === id);
  return find as IBoard;
};
export const updateBoard = async (
  id: string,
  obj: IBoard
): Promise<IBoard | undefined> => {
  const find = db.boards.findIndex((el) => el.id === id);
  db.boards[find] = obj;
  return db.boards[find];
};
export const deleteBoard = async (id: string): Promise<IBoard[]> => {
  taskRepo.deleteTasks(id);
  const find = db.boards.findIndex((el) => el.id === id);
  db.boards.splice(find, 1);
  return db.boards;
};
