import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
})

export const config = {
  type: "postgres",
  name: "typeorm-base",
  host: process.env['HOST'],
  port: 5432,
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRES_DB'],
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"]
} as ConnectionOptions
