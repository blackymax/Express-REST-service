import { Request, Response } from 'express';
import express from 'express';
import * as usersService from './service';
import User, { IUser } from '../../entity/user.model'
export const router = express.Router();

router.route('/').get(
  async (_req: Request, res: Response): Promise<void> => {
    const users = await usersService.getAll();
    res.status(200).json(users.map(User.toResponse));
  }
);

router.route('/:userId').get(
  async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const user = await usersService.getById(userId as string);
    res.status(200).json(User.toResponse(user as IUser));
  }
);

router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const user = await usersService.addNew({ ...req.body });
    res.status(201).json(User.toResponse(user));
  }
);

router.route('/:userId').put(
  async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const user = await usersService.updateUser(userId as string, req.body);
    res.status(200).json(User.toResponse(user as IUser));
  }
);

router.route('/:userId').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const users = await usersService.deleteByIndex(userId as string);
    res.status(200).json(users.map(User.toResponse));
  }
);
