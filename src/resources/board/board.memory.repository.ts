import { IBoard } from '../../interfaces/interfaces'
/**
 * @module BOARD_MEMORY
*/
const taskRepo = require('../task/task.service');
const Board = require('./board.model');

const boards: IBoard[] = [];
/**
 * Returns all boards
 * @returns {Array<IBoard>} boards
 */
const getAll = async (): Promise<IBoard[]> => boards.map(Board.toResponse);
/**
 * Returns new board
 * @param {object} obj object with params
 * @returns {Board} new Board
 */
const createBoard = async (obj: IBoard): Promise<IBoard> => {
  const newObj = new Board(obj);
  boards.push({ ...newObj });
  return Board.toResponse(boards[boards.length - 1] as IBoard);
};
/**
 * Returns board by id
 * @param {string} id board id
 * @returns {Board} Board
 */
const getById = async (id: string):Promise<IBoard> => {
  const find = boards.find((el) => el.id === id);
  return find as IBoard;
};
/**
 * Returns board with new params
 * @param {string} id board id
 * @param {object} obj object with params
 * @returns {Board} new board
 */
const updateBoard = async (id: string, obj: IBoard): Promise<IBoard> => {
  const find = boards.find((el) => el.id === id);
  return Board.toResponse(Object.assign(find, obj));
};
/**
 * Returns new array of boards
 * @param {string} id task id
 * @returns {Array<Board>} Boards without deleted Board
 */
const deleteBoard = async (id: string): Promise<IBoard[]> => {
  taskRepo.deleteTasks(id);
  const find = boards.findIndex((el) => el.id === id);
  boards.splice(find, 1);
  return boards;
};

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
