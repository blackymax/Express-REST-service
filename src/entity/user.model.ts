import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

type IUserForReponse = Omit<IUser, 'password'>;

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: true })
  name: string;

  @Column({ length: 100, nullable: true })
  login: string;

  @Column({ length: 100, nullable: true })
  password: string;

  constructor({
    id = uuid(),
    name = 'user',
    login = 'login',
    password = 'password',
  }: Partial<IUser> = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser): IUserForReponse {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
