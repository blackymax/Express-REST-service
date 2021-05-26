/**
 * @module TASK_SERVICE
*/
const taskRepo = require('./task.memory.repository');
/**
 * Returns all tasks by board id
 * @param {string} id board id
 * @returns {Array<Task>} tasks
 */
const getAllByBoardId = (id) => taskRepo.getAllByBoardId(id);
/**
 * Returns task by id
 * @param {string} boardId board id
 * @param {string} taskId task id
 * @returns {Task} task
 */
const getById = (boardId, taskId) => taskRepo.getById(boardId, taskId);
/**
 * Creates new task and returns it
 * @param {object} obj object with params
 * @param {string} boardId board id
 * @returns {Task} new Task
 */
const createTaskById = (obj, boardId) => taskRepo.createTaskById(obj, boardId);
/**
 * Update task and return it
 * @param {object} obj object with params
 * @param {string} boardId board id
 * @param {string} taskId task id
 * @returns {Task} new Task
 */
const updateTaskById = (obj, boardId, taskId) => taskRepo.updateTaskById(obj, boardId, taskId)
/**
 * Delete task by id and return other tasks
 * @param {string} boardId board id
 * @param {string} taskId task id
 * @returns {Array<Task>} tasks without deleted
 */
const deleteTaskById = (boardId, taskId) => taskRepo.deleteTaskById(boardId, taskId);
/**
 * Delete all tasks by board id and return others
 * @param {string} id board id
 * @returns {Array<Task>} tasks
 */
const deleteTasks = (id) => taskRepo.deleteTasks(id);
/**
 * Nullifing users ids in tasks
 * @param {string} id 
 * @returns {void} nothing
 */
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
