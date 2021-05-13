const router = require('express').Router();
const uuid = require('uuid');
const boardService = require('./board.service');

// get all boards

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

// get board by Id

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params; 
  const find = boardService.getById(boardId);
  res.json(find);
});

// create board

router.route('/').post(async (req, res) => {
  boardService.createBoard({...req.body, id: uuid.v1()})
  res.json(boardService.boards);
});

// update board

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  boardService.updateBoard(boardId, req.body);
  res.json(boardService.boards);
});

// delete board

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  boardService.deleteBoard(boardId);
  const boards = await boardService.getAll();
  res.json(boards);
});


module.exports = router;
