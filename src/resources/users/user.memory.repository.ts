import { IUser } from '../../interfaces/interfaces';
import * as taskRepo from '../task/task.service';
import User from './user.model';

const users: IUser[] = [];

export const getAll = async (): Promise<IUser[]> => users.map(User.toResponse);

export const getById = async (id: string): Promise<IUser> =>
  User.toResponse(users.find((el) => el.id === id) as IUser);

export const addNew = async (obj: IUser): Promise<IUser> => {
  users.push(new User({ ...obj }) as IUser);
  return User.toResponse(users[users.length - 1] as IUser);
};

export const deleteByIndex = async (id: string): Promise<IUser[]> => {
  const find = users.findIndex((el) => el.id === id);
  users.splice(find, 1);
  taskRepo.removeUsersId(id);
  return users.map(User.toResponse);
};

export const updateUser = async (id: string, obj: IUser): Promise<IUser> => {
  const find = users.findIndex((el) => el.id === id);
  Object.assign(users[find], obj);
  return User.toResponse(users[find] as IUser);
};
