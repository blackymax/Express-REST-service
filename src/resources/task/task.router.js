const router = require('express').Router();
const Task = require('./task.model');
const usersService = require('./task.service');

// get all tasks

router.route('/:boardId/tasks').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Task.toResponse));
});

// get task by id

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Task.toResponse));
});

// create task

router.route('/:boardId/tasks').post(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Task.toResponse));
});

// update task

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Task.toResponse));
});

// delete task

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Task.toResponse));
});

module.exports = router;
