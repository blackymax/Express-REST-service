/**
 * @module TASK_MEMORY
*/
const Task = require('./task.model');

let tasks = [];

/**
 * Returns all tasks by boardId
 * @param {string} id board id
 * @returns {Array<Task>} tasks of board
 */
const getAllByBoardId = async (id) => {
  const findTasks = tasks.filter((el) => el.boardId === id);
  return findTasks.map(Task.toResponse);
};
/**
 * Searches for Task by id and returns it 
 * @param {string} taskId task id
 * @returns {Task} Task
 */
const getById = async (taskId) => {
  const find = tasks.find((el) => el.id === taskId);
  return find;
};
/**
 * Creates task by Id
 * @param {object} obj object with params
 * @param {string} boardId board id
 * @returns {Task} new Task
 */
const createTaskById = async (obj, boardId) => {
  const newTask = { ...obj, boardId };
  tasks.push(new Task(newTask));
  return Task.toResponse(tasks[tasks.length - 1]);
};
/**
 * Updates task by id
 * @param {object} obj object with params
 * @param {string} taskId task id
 * @returns {Task} new Task
 */
const updateTaskById = async (obj, taskId) => {
  const findTask = tasks.find((el)=>el.id === taskId);
  Object.assign(findTask, obj);
  return Task.toResponse(findTask);
};
/**
 * Deletes Task by id
 * @param {string} taskId task id
 * @returns {Array<Task>} tasks without deleted 
 */
const deleteTaskById = async ( taskId ) => {
  const findTaskIndex = tasks.findIndex((el) => el.id === taskId);
  tasks.splice(findTaskIndex, 1);
  return tasks.map(Task.toResponse);
};
/**
 * Deletes tasks by id from db
 * @param {string} id task id
 * @returns {Array<Task>} tasks without deleted
 */
const deleteTasks = async (id) => {
  tasks = tasks.filter((el) => el.boardId !== id);
  return tasks.map(Task.toResponse);
};
/**
 * Remove user's id from task
 * @param {string} id user's id
 */
const removeUsersId = async (id) => {
    tasks.forEach((el) => {
        if (el.userId === id) {
            const newObj = {...el, userId: null};
            Object.assign(el, newObj);
        }
    });
};

module.exports = { getAllByBoardId, getById, createTaskById, updateTaskById, deleteTaskById, deleteTasks, removeUsersId };
