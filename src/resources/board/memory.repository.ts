import { getRepository } from 'typeorm';
import { Board } from '../../entity/board.model';
import { Task } from '../../entity/task.model';

export const getAll = async (): Promise<Board[]> => {
  const boardRepo = getRepository(Board)
  return await boardRepo.find();
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
  obj: Partial<Board>
): Promise<Board | undefined> => {
  const {columns, ...otherData} = obj;
  const boardRepo = getRepository(Board);
  const newBoard = await boardRepo.update(id, otherData);
  return newBoard.raw;
};
export const deleteBoard = async (id: string): Promise<boolean> => {
  const boardRepo = getRepository(Board)
  const taskRepo = getRepository(Task)
  await taskRepo.delete({boardId: id});
  const res = await boardRepo.delete(id)
  return !!res.affected
};
