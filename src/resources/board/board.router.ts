import express, { Request, Response } from 'express';
import { IBoard } from '../../interfaces/interfaces';
import Board from './board.model';
import * as boardService from './board.service';
export const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards: IBoard[] = await boardService.getAll();
  res.status(200).json(boards);
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const find = await boardService.getById(boardId);
  if (find) {
    res.status(200).json(Board.toResponse(find));
  } else {
    res.status(404).send({ message: 'board not found' });
  }
});

router.route('/').post(
  async (req: Request, res: Response): Promise<void> => {
    const newBoard = await boardService.createBoard(new Board(req.body));
    res.status(201).json(newBoard as IBoard);
  }
);

router.route('/:boardId').put(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId } = req.params;
    const newBoard = await boardService.updateBoard(
      boardId as string,
      req.body
    );
    res.status(200).json(newBoard);
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
