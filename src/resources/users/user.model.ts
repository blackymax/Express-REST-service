import { IUser } from '../../interfaces/interfaces';

import { v4 as uuid } from 'uuid';

export default class User {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser): IUser {
    const { id, name, login } = user;
    return { id, name, login } as IUser;
  }
}
