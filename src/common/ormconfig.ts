import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import path from 'path';
import { env } from './config';

dotenv.config({
  path: path.join(__dirname, '../../.env')
})

const config = {
  type: "postgres",
  port: env.POSTGRES_PORT,
  host: env.POSTGRES_HOST,
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: ['src/entity/*.ts'],
  migrations: ['src/migration/*.ts'],
  cli:{
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration/'
  }
} as ConnectionOptions

export default config;