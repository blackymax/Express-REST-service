const Task = require('./task.model');

let tasks = [];

/**
 * Returns all tasks by boardId
 * @param {string} id of board 
 * @returns {Array<Task>} returns array of tasks for desired board
 */
const getAllByBoardId = async (id) => {
  const findTasks = tasks.filter((el) => el.boardId === id);
  return findTasks.map(Task.toResponse);
};
/**
 * Search Task by id and retunrs him 
 * @param {string} taskId unique id of task which need to find
 * @returns {Task} returns the desired one Task
 */
const getById = async (taskId) => {
  const find = tasks.find((el) => el.id === taskId);
  return find;
};
/**
 * Create task by Id
 * @param {object} object for creating new Task
 * @param {string} boardId 
 * @returns {Task} returns new Task
 */
const createTaskById = async (obj, boardId) => {
  const newTask = { ...obj, boardId };
  tasks.push(new Task(newTask));
  return Task.toResponse(tasks[tasks.length - 1]);
};
/**
 * Update task by id
 * @param {object} obj source for update Task
 * @param {string} taskId from route params to find task
 * @returns {Task} returns new Task
 */
const updateTaskById = async (obj, taskId) => {
  const findTask = tasks.find((el)=>el.id === taskId);
  Object.assign(findTask, obj);
  return Task.toResponse(findTask);
};
/**
 * Delete Task by id
 * @param {string} taskId from route params 
 * @returns {Array<Task>} returns array of tasks without deleted 
 */
const deleteTaskById = async ( taskId ) => {
  const findTaskIndex = tasks.findIndex((el) => el.id === taskId);
  tasks.splice(findTaskIndex, 1);
  return tasks.map(Task.toResponse);
};
/**
 * Delete tasks by id from db
 * @param {string} task id 
 * @returns {Array<Task>} returns array of tasks
 */
const deleteTasks = async (id) => {
  tasks = tasks.filter((el) => el.boardId !== id);
  return tasks.map(Task.toResponse);
};
/**
 * Remove user's id from task
 * @param {string} id of user for search
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
