import { Request, Response } from 'express';
import express from 'express';
import * as usersService from './service';
export const router = express.Router();

router.route('/').get(
  async (_req: Request, res: Response): Promise<void> => {
    const users = await usersService.getAll();
    res.status(200).json(users);
  }
);

router.route('/:userId').get(
  async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const user = await usersService.getById(userId as string);
    res.status(200).json(user);
  }
);

router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const user = await usersService.addNew({ ...req.body });
    res.status(201).json(user);
  }
);

router.route('/:userId').put(
  async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const user = await usersService.updateUser(userId as string, req.body);
    res.status(200).json(user);
  }
);

router.route('/:userId').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const users = await usersService.deleteByIndex(userId as string);
    res.status(200).json(users);
  }
);
