import { IBoard } from '../../interfaces/interfaces';
import * as taskRepo from '../task/task.service';
import Board from './board.model';

const boards: IBoard[] = [];
export const getAll = async (): Promise<IBoard[]> =>
  boards.map(Board.toResponse);
export const createBoard = async (obj: IBoard): Promise<IBoard> => {
  boards.push(obj);
  return Board.toResponse(boards[boards.length - 1] as IBoard);
};
export const getById = async (
  id: string | undefined
): Promise<IBoard | undefined> => {
  const find = boards.find((el) => el.id === id);
  return find as IBoard;
};
export const updateBoard = async (
  id: string,
  obj: IBoard
): Promise<IBoard | undefined> => {
  const find = boards.findIndex((el) => el.id === id);
  if (boards[find]) {
    boards[find] = obj;
    return Board.toResponse(boards[find] as IBoard);
  }
  return undefined;
};
export const deleteBoard = async (id: string): Promise<IBoard[]> => {
  taskRepo.deleteTasks(id);
  const find = boards.findIndex((el) => el.id === id);
  boards.splice(find, 1);
  return boards;
};
