const usersRepo = require('./user.memory.repository');
const taskRepo = require('../task/task.service');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();
const getById = (id) => new User(usersRepo.users.find(el => el.id === id))
const addNew = (obj) => {
    usersRepo.users.push(new User({...obj}))
    return usersRepo.users[usersRepo.users.length - 1];
};
const deleteByIndex = (id) => {
    const find = usersRepo.users.findIndex(el => el.id === id)
    usersRepo.users.splice(find, 1);
    taskRepo.removeUsersId(id);
    return usersRepo.users;
}
const updateUser = (id, obj) => {
    const find = usersRepo.users.findIndex(el => el.id === id);
    return Object.assign(usersRepo.users[find], obj);
}

module.exports = { getAll, getById, addNew, deleteByIndex, updateUser };
