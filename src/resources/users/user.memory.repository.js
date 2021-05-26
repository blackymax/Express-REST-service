/**
 * @module USER_MEMORY
*/
const taskRepo = require('../task/task.service');
const User = require('./user.model');

const users = [];

/**
 * Returns all tasks from db
 * @returns {Array<User>} users
 */
const getAll = async () => users.map(User.toResponse);
/**
 * Searches for User and returns him
 * @param {string} id user id
 * @returns {User} user
 */
const getById = async (id) => User.toResponse(users.find(el => el.id === id))
/**
 * Creates User and returns him
 * @param {object} obj object with params 
 * @returns {User} new user
 */
const addNew = async (obj) => {
    users.push(new User({...obj}))
    return User.toResponse(users[users.length - 1]);
};
/**
 * Deletes user by id and returns it
 * @param {string} id user id
 * @returns {Array<User>} users without deleted
 */
const deleteByIndex = async (id) => {
    const find = users.findIndex(el => el.id === id)
    users.splice(find, 1);
    taskRepo.removeUsersId(id);
    return users.map(User.toResponse);
}
/**
 * Searches for user and updates him
 * @param {string} id user id
 * @param {object} obj with params 
 * @returns {User} new user
 */
const updateUser = async (id, obj) => {
    const find = users.findIndex(el => el.id === id);
    Object.assign(users[find], obj);
    return User.toResponse(users[find])
}
module.exports = { getAll, getById, addNew, deleteByIndex, updateUser };
