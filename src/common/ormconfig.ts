import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import path from 'path';
import { User } from '../entity/user.model';
import { Board } from '../entity/board.model';
import { Columns } from '../entity/column.model';
import { Task } from '../entity/task.model';


dotenv.config({
  path: path.join(__dirname, '../../.env')
})

const config = {
  type: "postgres",
  port: process.env['POSTGRES_PORT'],
  host: process.env['POSTGRES_HOST'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRES_DB'],
  synchronize: true,
  logging: false,
  entities: [User, Board, Columns, Task],
  migrations: ['src/migration/*.ts'],
  cli:{
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration/'
  }
} as ConnectionOptions

export default config;