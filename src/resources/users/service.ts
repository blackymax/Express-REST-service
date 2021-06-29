import User from '../../entity/user.model';
import * as usersRepo from './memory.repository';

export const getAll = (): Promise<User[]> => usersRepo.getAll();

export const getById = (id: string): Promise<User|undefined> => usersRepo.getById(id);

export const addNew = (obj: User): Promise<User> => usersRepo.addNew(obj);

export const deleteByIndex = (id: string): Promise<User[]> =>
  usersRepo.deleteByIndex(id);

export const updateUser = (id: string, obj: User): Promise<User | undefined> =>
  usersRepo.updateUser(id, obj);
