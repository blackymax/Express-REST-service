const taskRepo = require('../task/task.service');
const Board = require('./board.model');

const boards = [];
/**
 * Returns all boards
 * @returns {Array<Board>} returns array of boards
 */
const getAll = async () => boards.map(Board.toResponse);
/**
 * Returns board by
 * @param {object} obj with params
 * @returns {Board} object by model
 */
const createBoard = async (obj) => {
  const newObj = new Board(obj);
  boards.push({ ...newObj });
  return Board.toResponse(boards[boards.length - 1]);
};
/**
 * Return board by id
 * @param {string} id first term
 * @returns {Board} Board
 */
const getById = async (id) => {
  const find = boards.find((el) => el.id === id);
  return find;
};
/**
 * Returns board with new params
 * @param {string} id
 * @param {object} obj with params
 * @returns {Board} new board with new params
 */
const updateBoard = async (id, obj) => {
  const find = boards.find((el) => el.id === id);
  return Board.toResponse(Object.assign(find, obj));
};
/**
 * Returns new array of boards
 * @param {string} id
 * @returns {Array<board>} array of boards without deleted Board
 */
const deleteBoard = async (id) => {
  taskRepo.deleteTasks(id);
  const find = boards.findIndex((el) => el.id === id);
  boards.splice(find, 1);
  return boards;
};

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
