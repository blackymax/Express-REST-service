import * as taskRepo from '../task/service';
import { User } from '../../entity/user.model';
import { getRepository } from 'typeorm';

export const getAll = async (): Promise<User[]> => {
  const userRepo = getRepository(User);
  const result = await userRepo.find();
  return result
}

export const getById = async (id: string): Promise<User|undefined> => {
  const userRepo = getRepository(User);
  const result = await userRepo.findOne({where:{id}});
  return result;
}

export const addNew = async (obj: User): Promise<User> => {
  const userRepo = getRepository(User);
  const result = await userRepo.create(obj);
  return result;
};

export const deleteByIndex = async (id: string): Promise<User[]> => {
  const userRepo = getRepository(User);
  await userRepo.delete(id);
  taskRepo.removeUsersId(id);
  const result = await userRepo.find();
  return result;
};

export const updateUser = async (id: string, obj: User): Promise<User|undefined> => {
  const userRepo = getRepository(User);
  await userRepo.update(id, obj);
  const find = await userRepo.findOne({where:{id}});
  return find;
};
