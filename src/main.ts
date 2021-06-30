import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';
import YAML from 'yamljs';
import { AppModule } from './app.module';
import { env } from './common/config';
import { errorLogger } from './middleware/errorLogging/errorLogging.middleware';
import { createAdmin } from './resources/createAdmin';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const document = YAML.load(path.join(__dirname, '../doc/api.yaml'))
    SwaggerModule.setup('doc',app, document)
    app.useGlobalFilters(new errorLogger());
    await createAdmin();
    app.listen(4000, () => console.log(`App is running on http://localhost:${env.PORT}`))
}

bootstrap()