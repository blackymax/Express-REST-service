import { ITask } from '../../interfaces/interfaces'
const uuid = require('uuid');

/** Class Task */
class Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  /**
   * @typedef {Object} Task
   * @property {string} id
   * @property {string} title
   * @property {number} order
   * @property {string} description
   * @property {string} userId
   * @property {string} boardId
   * @property {string} columnId
   */
  constructor({
    id = uuid.v1(),
    title = 'TASK',
    order = 0,
    description = 'description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = uuid.v1(),
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: ITask) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
