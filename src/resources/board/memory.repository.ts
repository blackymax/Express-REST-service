import { getRepository } from 'typeorm';
import { Board } from '../../entity/board.model';
import { Task } from '../../entity/task.model';

export const getAll = async (): Promise<Board[]> => {
  const boardRepo = getRepository(Board);
  return boardRepo.find();
};
export const createBoard = async (obj: Board): Promise<Board> => {
  const boardRepo = getRepository(Board);
  const newBoard = boardRepo.create(obj);
  return boardRepo.save(newBoard);
};
export const getById = async (
  id?: string
): Promise<Board | undefined> => {
  const boardRepo = getRepository(Board);
  return boardRepo.findOne(id);
};
export const updateBoard = async (
  id: string,
  obj: Partial<Board>
): Promise<Board | undefined> => {
  const { columns, ...otherData } = obj;
  const boardRepo = getRepository(Board);
  const newBoard = await boardRepo.update(id, otherData);
  return newBoard.raw;
};
export const deleteBoard = async (id: string): Promise<void> => {
  const boardRepo = getRepository(Board);
  const taskRepo = getRepository(Task);
  await Promise.all([
    taskRepo.delete({ boardId: id }),
    boardRepo.delete(id),
  ]);
};
