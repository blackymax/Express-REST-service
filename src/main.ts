import { NestFactory } from '@nestjs/core';
// import { createConnection } from 'typeorm';
import { AppModule } from './app.module';
import { env } from './common/config';
// import config from './common/ormconfig';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.listen(4000, () => console.log(`App is running on http://localhost:${env.PORT}`))
}

bootstrap()