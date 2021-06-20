import { getRepository } from 'typeorm';
import { Board } from '../../entity/board.model';

export const getAll = async (): Promise<Board[]> => {
  const boardRepo = getRepository(Board)
  return await boardRepo.find({where: {}});
}
export const createBoard = async (obj: Board): Promise<Board> => {
  const boardRepo = getRepository(Board)
  const newBoard =  await boardRepo.create(obj);
  const savedBoard = await boardRepo.save(newBoard);
  return savedBoard;
};
export const getById = async (
  id: string | undefined
): Promise<Board | undefined> => {
  const boardRepo = getRepository(Board)
  return await boardRepo.findOne(id);
};
export const updateBoard = async (
  id: string,
  obj: Board
): Promise<Board | undefined> => {
  const boardRepo = getRepository(Board)
  const find = await boardRepo.findOne(id);
  if (!find) throw new Error('NOT_FOUND'); 
  const newBoard = await boardRepo.update(find, obj);
  return newBoard.raw;
};
export const deleteBoard = async (id: string): Promise<Board[]> => {
  const boardRepo = getRepository(Board)
  await boardRepo.delete({id})
  return await boardRepo.find({where:{}});
};
