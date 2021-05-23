const uuid = require('uuid');
const boardRepo = require('./board.memory.repository');
const taskRepo = require('../task/task.service');

const getAll = () => boardRepo.getAll();
const createBoard = (obj) => {
    const newObj = {...obj};
    newObj.columns[newObj.columns.length - 1].id = uuid.v1();
    boardRepo.boards.push({...newObj, id: uuid.v1()});
    return boardRepo.boards[boardRepo.boards.length - 1];
};
const getById = (id) => boardRepo.boards.find(el => el.id === id);
const updateBoard = (id, obj) => {
    const find = boardRepo.boards.find(el => el.id === id);
    return Object.assign(find, obj);
}
const deleteBoard = (id) => {
    taskRepo.deleteTasks(id);
    const find = boardRepo.boards.findIndex(el => el.id === id);
    boardRepo.boards.splice(find, 1)
    return boardRepo.boards
}

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
