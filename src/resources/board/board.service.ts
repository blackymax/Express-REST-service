import { IBoard } from '../../interfaces/interfaces';
import * as boardRepo from './board.memory.repository';

export const getAll = (): Promise<IBoard[]> => boardRepo.getAll();

export const createBoard = (obj: IBoard): Promise<IBoard> =>
  boardRepo.createBoard(obj);

export const getById = (id: string | undefined): Promise<IBoard | undefined> =>
  boardRepo.getById(id);

export const updateBoard = (
  id: string,
  obj: IBoard
): Promise<IBoard | undefined> => boardRepo.updateBoard(id, obj);

export const deleteBoard = (id: string): Promise<IBoard[]> =>
  boardRepo.deleteBoard(id);
