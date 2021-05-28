import { IBoard } from '../../interfaces/interfaces'
/**
 * @module BOARD_SERVICE
*/
const boardRepo = require('./board.memory.repository');
/**
 * Returns all boards
 * @returns {Array<Board>} boards
 */
const getAll = () => boardRepo.getAll();
/**
 * Creates new board and returns it
 * @param {object} obj object with params
 * @returns {Board} new Board
 */
const createBoard = (obj: IBoard) => boardRepo.createBoard(obj);
/**
 * Finds board by id and returns it
 * @param {string} id board id
 * @returns {Board}
 */
const getById = (id:IBoard) => boardRepo.getById(id);
/**
 * Updates board and returns it
 * @param {string} id board id
 * @param {object} obj object with params
 * @returns {Board} new Board
 */
const updateBoard = (id:string, obj:IBoard) => boardRepo.updateBoard(id, obj);
/**
 * Deletes board and returns others
 * @param {string} id board id
 * @returns {Array<Board>} boards without deleted
 */
const deleteBoard = (id:string) => boardRepo.deleteBoard(id);

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
