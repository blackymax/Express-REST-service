import { IBoard, IColumn } from '../../interfaces/interfaces'
const uuid = require('uuid');

/** Class Board */
class Board implements IBoard{
  id: string;
  title: string;
  columns: IColumn[];
  /**
 * @typedef {Object} Board
 * @property {string} id
 * @property {string} title
 * @property {Array<Object>} columns
 */
  constructor({
    id = uuid.v1(),
    title = 'USER',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: IBoard) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
