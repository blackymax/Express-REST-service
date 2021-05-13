const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.users.find(el => el.id === id)
const addNew = (obj) => {
    usersRepo.users.push({...obj})
    return Array.from(new Set(usersRepo.users)).map(User.toResponse)
};
const deleteByIndex = (id) => {
    const find = usersRepo.users.findIndex(el => el.id === id)
    usersRepo.users.splice(find, 1);
    return usersRepo.users;
}

module.exports = { getAll, getById, addNew, deleteByIndex };
