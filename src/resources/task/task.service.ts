import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Task from '../../entity/task.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>
  ){}
  async getAllByBoardId(id: string): Promise<Task[]> {
    const findTasks = await this.taskRepo.find({ where: { boardId: id } });
    return findTasks;
  }

  async getById(taskId: string): Promise<Task | undefined> {
    return this.taskRepo.findOne({ where: { id: taskId } });
  }

  async createTaskById(obj: Task, boardId: string): Promise<Task> {
    const newTask = this.taskRepo.create({ ...obj, boardId });
    return this.taskRepo.save(newTask);
  }

  async updateTaskById(obj: Task, taskId: string): Promise<Task | undefined> {
    await this.taskRepo.update(taskId, obj);
    return this.taskRepo.findOne(taskId);
  }

  async deleteTaskById(taskId: string): Promise<void> {
    await Promise.all([this.taskRepo.delete(taskId), this.taskRepo.find({ where: {} })]);
  }

  async deleteTasks(id: string): Promise<Task[]> {
    await this.taskRepo.delete(id);
    return this.taskRepo.find({ where: {} });
  }

  async removeUsersId(id: string): Promise<void> {
    await this.taskRepo.update({ userId: id }, { userId: null });
  }
}
