import { IUser } from '../../interfaces/interfaces'
/**
 * @module USER_SERVICE
*/
const usersRepo = require('./user.memory.repository');
/**
 * Returns all users
 * @returns {Array<User>} users
 */
const getAll = () => usersRepo.getAll();
/**
 * Returns user by id
 * @param {string} id user id
 * @returns {User} user
 */
const getById = (id: string) => usersRepo.getById(id);
/**
 * Creates new user and returns him
 * @param {object} obj object with params
 * @returns {User} new user
 */
const addNew = (obj: IUser) => usersRepo.addNew(obj);
/**
 * Deletes user by id
 * @param {string} id user id
 * @returns {Array<User>} users without deleted
 */
const deleteByIndex = (id:string) => usersRepo.deleteByIndex(id);
/**
 * Returns updated user
 * @param {string} id user id
 * @param {object} obj object with params
 * @returns {User} new user
 */
const updateUser = (id:string, obj:IUser) => usersRepo.updateUser(id, obj)

module.exports = { getAll, getById, addNew, deleteByIndex, updateUser };
