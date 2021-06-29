import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './common/ormconfig';
import { BoardModule } from './resources/board/board.module';
import { TaskModule } from './resources/task/task.module';
import { UserModule } from './resources/users/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(config),
    BoardModule,
    TaskModule,
    UserModule
],
  
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthMiddleware).forRoutes({
  //     path: '*',
  //     method: RequestMethod.ALL,
  //   });
  // }
}
