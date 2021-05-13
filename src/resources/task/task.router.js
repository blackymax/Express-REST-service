const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');
const boardMem= require('../board/board.memory.repository');

// get all tasks

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getAllByBoardId(boardId);
  res.json(tasks);
});

// get task by id

router.route('/:taskId').get(async (req, res) => {
  const { taskId, boardId } = req.params;
  const find = taskService.getById(boardId, taskId);
  res.json(find);
});

// create task

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  taskService.createTaskById(req.body, boardId);
  res.json(boardMem.boards);
});

// update task

// router.route('/:taskId').get(async (req, res) => {
//   const { boardId, taskId } = req.params;
//   const users = await taskService.getAll();
//   const tasks = await taskService.getAllByBoardId(boardId);
//   res.json(tasks);
// });

// delete task

// router.route('/:taskId').get(async (req, res) => {
//   const users = await taskService.getAll();
//   const tasks = await taskService.getAllByBoardId(boardId);
//   res.json(tasks);
// });

module.exports = router;
