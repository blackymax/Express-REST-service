import { Controller, Delete, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import Task from '../../entity/task.model';
import { AuthGuard } from '../../guards/authGuard';
import { ITask } from '../../interfaces';
import { TaskService } from './task.service';

@UseGuards(AuthGuard)
@Controller('/boards/:boardId/tasks')
export class TaskController {
  constructor(
    private readonly taskService:TaskService
  ) {}
  @Get('/')
  async getAll(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { boardId } = req.params;
    const tasks = await this.taskService.getAllByBoardId(boardId as string);
    res.status(200).json(tasks);
  }

  @Get('/:taskId')
  async getById(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { taskId } = req.params;
    const find = await this.taskService.getById(taskId as string);
    if (find) {
      res.status(200).json(find);
    } else {
      res.status(404).json({ message: 'cannot find task' });
    }
  }

  @Post('/')
  async createTask(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { boardId } = req.params;
    if (boardId) {
      const newTask = await this.taskService.createTaskById(req.body, boardId);
      res.status(201).json(newTask);
    }
  }

  @Put('/:taskId')
  async updateTask(@Req() req: Request, @Res()  res: Response): Promise<void> {
    const { taskId } = req.params;
    const result = await this.taskService.updateTaskById(
      req.body as Task,
      taskId as string
    );
    res.status(200).json(result as ITask);
  }

  @Delete('/:taskId')
  async deleteById(@Req() req: Request, @Res()  res: Response): Promise<void> {
    const { taskId } = req.params;
    const result = await this.taskService.deleteTaskById(taskId as string);
    res.status(200).json(result);
  }
}
