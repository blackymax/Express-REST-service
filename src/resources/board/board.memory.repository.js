/**
 * @module BOARD_MEMORY
*/
const taskRepo = require('../task/task.service');
const Board = require('./board.model');

const boards = [];
/**
 * Returns all boards
 * @returns {Array<Board>} boards
 */
const getAll = async () => boards.map(Board.toResponse);
/**
 * Returns new board
 * @param {object} obj object with params
 * @returns {Board} new Board
 */
const createBoard = async (obj) => {
  const newObj = new Board(obj);
  boards.push({ ...newObj });
  return Board.toResponse(boards[boards.length - 1]);
};
/**
 * Returns board by id
 * @param {string} id board id
 * @returns {Board} Board
 */
const getById = async (id) => {
  const find = boards.find((el) => el.id === id);
  return find;
};
/**
 * Returns board with new params
 * @param {string} id board id
 * @param {object} obj object with params
 * @returns {Board} new board
 */
const updateBoard = async (id, obj) => {
  const find = boards.find((el) => el.id === id);
  return Board.toResponse(Object.assign(find, obj));
};
/**
 * Returns new array of boards
 * @param {string} id task id
 * @returns {Array<Board>} Boards without deleted Board
 */
const deleteBoard = async (id) => {
  taskRepo.deleteTasks(id);
  const find = boards.findIndex((el) => el.id === id);
  boards.splice(find, 1);
  return boards;
};

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
