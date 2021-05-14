const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');
const Task = require('./task.model');

// get all tasks

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = taskService.getAllByBoardId(boardId);
  res.status(200).json(tasks.map(Task.toResponse));
});

// get task by id

router.route('/:taskId').get(async (req, res) => {
  const { taskId, boardId } = req.params;
  const find = taskService.getById(boardId, taskId);
  if (find) {
    res.status(200).json(Task.toResponse(find));
  } else {
    res.status(404).json({message: 'cannot find task'})
  }
});

// create task

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const newTask = taskService.createTaskById(req.body, boardId);
  res.status(201).json(Task.toResponse(newTask));
});

// update task

router.route('/:taskId').put(async (req, res) => {
  const { taskId, boardId } = req.params;
  const result = taskService.updateTaskById(req.body, boardId, taskId);
  res.status(200).json(Task.toResponse(result));
});

// delete task

router.route('/:taskId').delete(async (req, res) => {
  const { taskId, boardId } = req.params;
  const result = taskService.deleteTaskById(boardId, taskId);
  res.status(200).json(result.map(Task.toResponse));
});

module.exports = router;
