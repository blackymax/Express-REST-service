import { Request, Response } from 'express';
import express from 'express';
import * as taskService from './service';
import { ITask } from '../../interfaces';
import Task from '../../entity/task.model';
export const router = express.Router({ mergeParams: true });

router.route('/').get(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId } = req.params;
    const tasks = await taskService.getAllByBoardId(boardId as string);
    res.status(200).json(tasks);
  }
);

router.route('/:taskId').get(
  async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;
    const find = await taskService.getById(taskId as string);
    if (find) {
      res.status(200).json(find);
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
      res.status(201).json(newTask);
    }
  }
);

router.route('/:taskId').put(
  async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;
    const result = await taskService.updateTaskById(
      req.body as Task,
      taskId as string
    );
    res.status(200).json(result as ITask);
  }
);

router.route('/:taskId').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { taskId } = req.params;
    const result = await taskService.deleteTaskById(taskId as string);
    res.status(200).json(result);
  }
);
