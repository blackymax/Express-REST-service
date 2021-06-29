import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../../entity/user.model';
import { TaskService } from '../task/task.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TaskService],
  controllers: [UserController],
  providers: [UserService, TaskService],
})
export class UserModule {}
