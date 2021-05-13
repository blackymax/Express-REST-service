const uuid = require('uuid');

class Column {
  constructor({
    id = uuid(),
    title = 'title',
    order = 'order',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(user) {
    const { id, title, order } = user;
    return { id, title, order };
  }
}

module.exports = Column;
