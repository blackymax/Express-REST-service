const taskRepo = require('./task.memory.repository');

const getAllByBoardId = (id) => taskRepo.getAllByBoardId(id);
const getById = (boardId, taskId) => taskRepo.getById(boardId, taskId);
const createTaskById = (obj, boardId) => taskRepo.createTaskById(obj, boardId);
const updateTaskById = (obj, boardId, taskId) => taskRepo.updateTaskById(obj, boardId, taskId)
const deleteTaskById = (boardId, taskId) => taskRepo.deleteTaskById(boardId, taskId);
const deleteTasks = (id) => taskRepo.deleteTasks(id);
const removeUsersId = (id) => taskRepo.removeUsersId(id);

module.exports = {
  getById,
  getAllByBoardId,
  createTaskById,
  updateTaskById,
  deleteTaskById,
  deleteTasks,
  removeUsersId,
};
