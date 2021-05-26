const taskRepo = require('../task/task.service');
const User = require('./user.model');

const users = [];

/**
 * Returns all tasks from db
 * @typedef {Array<User>}
 * @returns {Array<User>} returns users
 */
const getAll = async () => users.map(User.toResponse);
/**
 * Searching for User and returns him
 * @typedef {User}
 * @param {string} id of user 
 * @returns {User} returns the desired one User
 */
const getById = async (id) => User.toResponse(users.find(el => el.id === id))
/**
 * Create User and return him
 * @typedef {User}
 * @param {object} obj with attributes of new User 
 * @returns {User} returns created User
 */
const addNew = async (obj) => {
    users.push(new User({...obj}))
    return User.toResponse(users[users.length - 1]);
};
/**
 * Delete user by ID
 * @typedef {Array<User>}
 * @param {string} id of user
 * @returns {Array<User>} returns new users array without deleted
 */
const deleteByIndex = async (id) => {
    const find = users.findIndex(el => el.id === id)
    users.splice(find, 1);
    taskRepo.removeUsersId(id);
    return users.map(User.toResponse);
}
/**
 * Search user and update him
 * @typedef {User}
 * @param {string} id of user
 * @param {object} obj of new attributes for User 
 * @returns {User} returns new version of User
 */
const updateUser = async (id, obj) => {
    const find = users.findIndex(el => el.id === id);
    Object.assign(users[find], obj);
    return User.toResponse(users[find])
}
module.exports = { getAll, getById, addNew, deleteByIndex, updateUser };
