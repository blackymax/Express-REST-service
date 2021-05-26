const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getById(id);
const addNew = (obj) => usersRepo.addNew(obj);
const deleteByIndex = (id) => usersRepo.deleteByIndex(id);
const updateUser = (id, obj) => usersRepo.updateUser(id, obj)

module.exports = { getAll, getById, addNew, deleteByIndex, updateUser };
