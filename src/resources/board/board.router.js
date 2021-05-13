const router = require('express').Router();
const Board = require('./board.model');
const usersService = require('./board.service');

// get all boards

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Board.toResponse));
});

// get board by Id

router.route('/:boardId').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Board.toResponse));
});

// create board

router.route('/').post(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Board.toResponse));
});

// update board

router.route('/:boardId').put(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Board.toResponse));
});

// delete board

router.route('/:boardId').delete(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Board.toResponse));
});


module.exports = router;
