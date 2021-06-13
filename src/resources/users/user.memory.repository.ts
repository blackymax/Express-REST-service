import { IUser } from '../../interfaces';
import * as taskRepo from '../task/task.service';
import User from './user.model';
import { db } from '../../common/db';

export const getAll = async (): Promise<IUser[]> => db.users.map(User.toResponse);

export const getById = async (id: string): Promise<IUser> =>
  User.toResponse(db.users.find((el) => el.id === id) as IUser);

export const addNew = async (obj: IUser): Promise<IUser> => {
  db.users.push(new User({ ...obj }) as IUser);
  return User.toResponse(db.users[db.users.length - 1] as IUser);
};

export const deleteByIndex = async (id: string): Promise<IUser[]> => {
  const find = db.users.findIndex((el) => el.id === id);
  db.users.splice(find, 1);
  taskRepo.removeUsersId(id);
  return db.users.map(User.toResponse);
};

export const updateUser = async (id: string, obj: IUser): Promise<IUser> => {
  const find = db.users.findIndex((el) => el.id === id);
  Object.assign(db.users[find], obj);
  return User.toResponse(db.users[find] as IUser);
};
