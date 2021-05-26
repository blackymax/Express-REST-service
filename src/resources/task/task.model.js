const uuid = require('uuid');

class Task {
  constructor({
    id = uuid.v1(),
    title = 'TASK',
    order = 'order',
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

  static toResponse(user) {
    const { id, title, order, description, userId, boardId, columnId } = user;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
