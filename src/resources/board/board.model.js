const uuid = require('uuid');

/** Class Board */
class Board {
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

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
