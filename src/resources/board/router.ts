import express, { Request, Response } from 'express';
import Board from '../../entity/board.model';
import * as boardService from './service';
export const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards: Board[]|undefined = await boardService.getAll();
  res.status(200).json(boards);
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const find = await boardService.getById(boardId);
  if (find) {
    res.status(200).json(find);
  } else {
    res.status(404).send({ message: 'board not found' });
  }
});

router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const newBoard = await boardService.createBoard(req.body);
    res.status(201).json(newBoard);
  }
);

router.route('/:boardId').put(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId } = req.params;
    const newBoard = await boardService.updateBoard(
      boardId as string,
      req.body
    );
    res.status(200).json(newBoard as Board);
  }
);

router.route('/:boardId').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId } = req.params;
    const result = await boardService.deleteBoard(boardId as string);
    res.status(200).json(result);
  }
);

export default router;
