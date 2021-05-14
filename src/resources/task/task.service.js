const uuid = require('uuid');
const boardRepo = require('../board/board.memory.repository');

const getAllByBoardId = (id) => {
    const find = boardRepo.boards.find(el => el.id === id);
    return find.columns.map(el => el.tasks)
};
const getById = (boardId, taskId) => {
    const findBoard = boardRepo.boards.find(el => el.id === boardId);
    let find = {};
    findBoard.columns.forEach(element => {
        find = element.tasks.find(el => el.taskId === taskId);
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
    const findTask = getById(boardId, taskId);
    Object.assign(findTask, obj);
    return boardRepo.boards;
}
const deleteTaskById = (boardId, taskId) => {
    const findBoard = boardRepo.boards.find(el => el.id === boardId);
    let findTaskIndex;
    let findBoardIndex;
    findBoard.columns.forEach((element, index) => {
        findTaskIndex = element.tasks.findIndex(el => el.taskId === taskId);
        if (findTaskIndex) {
            findBoardIndex = index;
        }
    })
    findBoard.columns[findBoardIndex].tasks.splice(findTaskIndex, 1);
    return boardRepo.boards;
}


module.exports = { getById, getAllByBoardId, createTaskById, updateTaskById, deleteTaskById };
