const uuid = require('uuid');

/** Class User */
class User {
  /**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} login
 * @property {string} password
 */
  constructor({
    id = uuid.v1(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
