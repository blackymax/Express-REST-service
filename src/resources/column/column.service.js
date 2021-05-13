const columnnRepo = require('./column.memory.repository');

const getAll = () => columnnRepo.getAll();

module.exports = { getAll };
