import User from '../../entity/user.model';
import { Repository } from 'typeorm';
import { TaskService } from '../task/task.service';
import { InjectRepository } from '@nestjs/typeorm';

export class UserService {
  constructor(
    private readonly taskRepo: TaskService,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ){}

  async getAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async getById(id: string): Promise<User | undefined> {
    return this.userRepo.findOne({ where: { id } });
  }

  async addNew(obj: User): Promise<User> {
    const result = await this.userRepo.create(obj);
    return this.userRepo.save(result);
  }

  async deleteByIndex(id: string): Promise<User[]> {
    await Promise.all([
      await this.userRepo.delete(id),
      await this.taskRepo.removeUsersId(id),
    ]);
    return this.userRepo.find();
  }

  async updateUser(id: string, obj: User): Promise<User | undefined> {
    await this.userRepo.update(id, obj);
    return this.userRepo.findOne(id);
  }
}
