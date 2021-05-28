import { Request, Response } from "express";
import { IBoard } from '../../interfaces/interfaces'

const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

// get all boards

router.route('/').get(async (_req: Request, res: Response) => {
  const boards: IBoard[] = await boardService.getAll();
  res.status(200).json(boards);
});

// get board by Id

router.route('/:boardId').get(async (req: Request, res:Response) => {
  const { boardId } = req.params;
  const find = await boardService.getById(boardId);
  if (find) {
    res.status(200).json(Board.toResponse(find));
  } else {
    res.status(404).send({message: 'board not found'})
  }
});

// create board

router.route('/').post(async (req:Request, res:Response):Promise<void> => {
  const newBoard = await boardService.createBoard({...req.body})
  res.status(201).json(newBoard);
});

// update board

router.route('/:boardId').put(async (req:Request, res:Response):Promise<void> => {
  const { boardId } = req.params;
  const newBoard = await boardService.updateBoard(boardId, req.body);
  res.status(200).json(newBoard);
});

// delete board

router.route('/:boardId').delete(async (req:Request, res:Response):Promise<void> => {
  const { boardId } = req.params;
  const result = await boardService.deleteBoard(boardId);
  res.status(200).json(result);
});


module.exports = router;
