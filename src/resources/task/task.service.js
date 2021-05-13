const uuid = require('uuid');
const boardRepo = require('../board/board.memory.repository');

const getAllByBoardId = (id) => {
    const find = boardRepo.boards.find(el => el.id === id);
    return find.columns.tasks
};
const getById = (boardId, taskId) => {
    const findBoard = boardRepo.boards.find(el => el.id === boardId);
    let find;
    findBoard.columns.forEach(element => {
        find = element.tasks.find(el => el.id === taskId);
    })
    return find
};
const createTaskById = (obj, boardId) => {
    const findBoard = boardRepo.boards.find(el => el.id === boardId);
    if (!findBoard.columns[0].tasks || findBoard.columns[0].tasks.length === 0) {
        findBoard.columns[0].tasks = [{...obj, boardId, taskId: uuid.v1()}];
    } else {
        findBoard.columns[0].tasks.push({...obj, boardId, taskId: uuid.v1()})
    }
};
const updateTaskById = (obj, boardId, taskId) => {
    const findBoard = boardRepo.boards.find(el => el.id === boardId);
    const findTask = findBoard.columns.find(el => el.id === taskId);
    Object.assign(findTask, obj);
}
const deleteTaskById = (boardId, taskId) => {
    const findBoard = boardRepo.boards.find(el => el.id === boardId);
    const findTaskIndex = findBoard.columns.findIndex(el => el.id === taskId);
    findBoard.columns.splice(findTaskIndex, 1);
}


module.exports = { getById, getAllByBoardId, createTaskById, updateTaskById, deleteTaskById };
