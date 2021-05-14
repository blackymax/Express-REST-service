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

router.route('/:taskId').put(async (req, res) => {
  const { taskId, boardId } = req.params;
  const result = taskService.updateTaskById(req.body, boardId, taskId);
  res.json(result);
});

// delete task

router.route('/:taskId').delete(async (req, res) => {
  const { taskId, boardId } = req.params;
  const result = taskService.deleteTaskById(boardId, taskId);
  res.json(result);
});

module.exports = router;
