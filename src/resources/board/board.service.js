const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();
const createBoard = (obj) => boardRepo.createBoard(obj);
const getById = (id) => boardRepo.getById(id);
const updateBoard = (id, obj) => boardRepo.updateBoard(id, obj);
const deleteBoard = (id) => boardRepo.deleteBoard(id);

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
