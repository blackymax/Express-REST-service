import express, { Request, Response } from 'express';
import { IBoard } from '../../interfaces';
import Board from './model';
import * as boardService from './service';
export const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards: IBoard[]|undefined = await boardService.getAll();
  res.status(200).json(boards?.map(Board.toResponse));
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
    res.status(201).json(Board.toResponse(newBoard));
  }
);

router.route('/:boardId').put(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId } = req.params;
    const newBoard = await boardService.updateBoard(
      boardId as string,
      req.body
    );
    res.status(200).json(Board.toResponse(newBoard as IBoard));
  }
);

router.route('/:boardId').delete(
  async (req: Request, res: Response): Promise<void> => {
    const { boardId } = req.params;
    const result = await boardService.deleteBoard(boardId as string);
    res.status(200).json(result.map(Board.toResponse));
  }
);

export default router;
