const router = require('express').Router();
const uuid = require('uuid');
const Board = require('./board.model');
const boardService = require('./board.service');

// get all boards

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

// get board by Id

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params; 
  const find = boardService.getById(boardId);
  if (find) {
    res.status(200).json(Board.toResponse(find));
  } else {
    res.status(404).send({message: 'board not found'})
  }
});

// create board

router.route('/').post(async (req, res) => {
  const newBoard = boardService.createBoard({...req.body, id: uuid.v1()})
  res.status(201).json(Board.toResponse(newBoard));
});

// update board

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const newBoard = boardService.updateBoard(boardId, req.body);
  res.status(200).json(Board.toResponse(newBoard));
});

// delete board

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  const result = boardService.deleteBoard(boardId);
  res.status(200).json(result.map(Board.toResponse));
});


module.exports = router;
