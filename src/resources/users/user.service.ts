import { IUser } from '../../interfaces/interfaces';
import * as usersRepo from './user.memory.repository';

export const getAll = (): Promise<IUser[]> => usersRepo.getAll();

export const getById = (id: string): Promise<IUser> => usersRepo.getById(id);

export const addNew = (obj: IUser): Promise<IUser> => usersRepo.addNew(obj);

export const deleteByIndex = (id: string): Promise<IUser[]> =>
  usersRepo.deleteByIndex(id);

export const updateUser = (id: string, obj: IUser): Promise<IUser> =>
  usersRepo.updateUser(id, obj);
