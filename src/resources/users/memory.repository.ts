import * as taskRepo from '../task/service';
import User from '../../entity/user.model';
import { getRepository } from 'typeorm';

export const getAll = async (): Promise<User[]> => {
  const userRepo = getRepository(User);
  return userRepo.find();
};

export const getById = async (id: string): Promise<User | undefined> => {
  const userRepo = getRepository(User);
  return userRepo.findOne({ where: { id } });
};

export const addNew = async (obj: User): Promise<User> => {
  const userRepo = getRepository(User);
  const result = await userRepo.create(obj);
  return userRepo.save(result);
};

export const deleteByIndex = async (id: string): Promise<User[]> => {
  const userRepo = getRepository(User);
  await Promise.all([await userRepo.delete(id), await taskRepo.removeUsersId(id)]);
  return userRepo.find();
};

export const updateUser = async (
  id: string,
  obj: User
): Promise<User | undefined> => {
  const userRepo = getRepository(User);
  await userRepo.update(id, obj);
  return userRepo.findOne(id);
};
