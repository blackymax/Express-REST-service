const uuid = require('uuid');
const taskRepo = require('./task.memory.repository');

const getAllByBoardId = (id) => {
  const findTasks = taskRepo.tasks.filter((el) => el.boardId === id);
  return findTasks;
};
const getById = (boardId, taskId) => {
  const find = taskRepo.tasks.find((el) => el.id === taskId);
  return find;
};
const createTaskById = (obj, boardId) => {
  const newTask = { ...obj, boardId, id: uuid.v1() };
  taskRepo.tasks.push(newTask);
  return taskRepo.tasks[taskRepo.tasks.length - 1];
};
const updateTaskById = (obj, boardId, taskId) => {
  const findTask = getById(boardId, taskId);
  Object.assign(findTask, obj);
  return findTask;
};
const deleteTaskById = (boardId, taskId) => {
  const findTaskIndex = taskRepo.tasks.findIndex((el) => el.id === taskId);
  taskRepo.tasks.splice(findTaskIndex, 1);
  return taskRepo.tasks;
};

const deleteTasks = (id) => {
  taskRepo.tasks = taskRepo.tasks.filter((el) => el.boardId !== id);
  return taskRepo.tasks;
};
const removeUsersId = (id) => {
    taskRepo.tasks.forEach((el) => {
        if (el.userId === id) {
            const newObj = {...el, userId: null};
            Object.assign(el, newObj);
        }
    });
};

module.exports = {
  getById,
  getAllByBoardId,
  createTaskById,
  updateTaskById,
  deleteTaskById,
  deleteTasks,
  removeUsersId,
};
