import { Board } from '../../entity/board.model';
import * as boardRepo from './memory.repository';

export const getAll = (): Promise<Board[]|undefined> => boardRepo.getAll();

export const createBoard = (obj: Board): Promise<Board> =>
  boardRepo.createBoard(obj);

export const getById = (id: string | undefined): Promise<Board | undefined> =>
  boardRepo.getById(id);

export const updateBoard = (
  id: string,
  obj: Board
): Promise<Board | undefined> => boardRepo.updateBoard(id, obj);

export const deleteBoard = (id: string): Promise<Board[]> =>
  boardRepo.deleteBoard(id);
