import dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const env = {
  PORT: process.env['PORT'],
  NODE_ENV: process.env['NODE_ENV'],
  MONGO_CONNECTION_STRING: process.env['MONGO_CONNECTION_STRING'],
  JWT_SECRET_KEY: process.env['JWT_SECRET_KEY'],
  AUTH_MODE: process.env['AUTH_MODE'] === 'true',
  POSTGRES_DB: process.env['POSTGRES_DB'],
  POSTGRES_PASSWORD: process.env['POSTGRES_PASSWORD'],
  POSTGRES_USER: process.env['POSTGRES_USER'],
  POSTGRES_HOST: process.env['POSTGRES_HOST'],
  POSTGRES_PORT: process.env['POSTGRES_PORT'],
  ADMIN_LOGIN: process.env['ADMIN_LOGIN'],
  ADMIN_PASSWORD: process.env['ADMIN_PASSWORD'],
  USE_FASTIFY: process.env['USE_FASTIFY']
};
