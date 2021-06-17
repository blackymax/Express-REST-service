import { Request, Response } from 'express';
import express from 'express';
import * as taskService from './task.service';
import { ITask } from '../../interfaces';
import Task from './task.model';
export const router = express.Router({ mergeParams: true });

router.route('/').get(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId } = req.params;
    const tasks = await taskService.getAllByBoardId(boardId as string);
    res.status(200).json(tasks.map(Task.toResponse));
  }
);

router.route('/:taskId').get(
  async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;
    const find = await taskService.getById(taskId as string);
    if (find) {
      res.status(200).json(Task.toResponse(find));
    } else {
      res.status(404).json({ message: 'cannot find task' });
    }
  }
);

router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId } = req.params;
    if (boardId) {
      const newTask = await taskService.createTaskById(req.body, boardId);
      res.status(201).json(Task.toResponse(newTask as ITask));
    }
  }
);

router.route('/:taskId').put(
  async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;
    const result = await taskService.updateTaskById(
      req.body as ITask,
      taskId as string
    );
    res.status(200).json(Task.toResponse(result as ITask));
  }
);

router.route('/:taskId').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;
    const result = await taskService.deleteTaskById(taskId as string);
    res.status(200).json(result.map(Task.toResponse));
  }
);
