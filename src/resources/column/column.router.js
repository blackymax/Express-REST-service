const router = require('express').Router();
const Column = require('./column.model');
const usersService = require('./column.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Column.toResponse));
});

module.exports = router;
