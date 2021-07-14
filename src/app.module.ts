import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './common/ormconfig';
import { errorLogger } from './middleware/errorLogging/errorLogging.middleware';
import { AppLogger } from './middleware/loggingHandler/loggingHandler.module';
import { BoardModule } from './resources/board/board.module';
import { LoginModule } from './resources/login/login.module';
import { TaskModule } from './resources/task/task.module';
import { UserModule } from './resources/users/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(config),
    BoardModule,
    TaskModule,
    UserModule,
    errorLogger,
    LoginModule,
    AppLogger,
],
  
})
export class AppModule {}
