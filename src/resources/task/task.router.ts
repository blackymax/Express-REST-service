import { Request, Response } from "express";

export {}
const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');

// get all tasks

router.route('/').get(async (req:Request, res:Response):Promise<void> => {
  const { boardId } = req.params;
  const tasks = await taskService.getAllByBoardId(boardId);
  res.status(200).json(tasks);
});

// get task by id

router.route('/:taskId').get(async (req:Request, res:Response):Promise<void> => {
  const { taskId } = req.params;
  const find = await taskService.getById(taskId);
  if (find) {
    res.status(200).json(find);
  } else {
    res.status(404).json({message: 'cannot find task'})
  }
});

// create task

router.route('/').post(async (req:Request, res:Response):Promise<void> => {
  const { boardId } = req.params;
  const newTask = await taskService.createTaskById(req.body, boardId);
  res.status(201).json(newTask);
});

// update task

router.route('/:taskId').put(async (req:Request, res:Response):Promise<void> => {
  const { taskId } = req.params;
  const result = await taskService.updateTaskById(req.body, taskId);
  res.status(200).json(result);
});

// delete task

router.route('/:taskId').delete(async (req:Request, res:Response):Promise<void> => {
  const { taskId } = req.params;
  const result = await taskService.deleteTaskById(taskId);
  res.status(200).json(result);
});

module.exports = router;
