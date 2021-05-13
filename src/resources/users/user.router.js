const router = require('express').Router();
const uuid = require('uuid');
const User = require('./user.model');
const usersService = require('./user.service');

// get all users

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

// get the user by id

router.route('/:userId').get(async (req, res) => {
  const {userId} = req.params;
  const user = usersService.getById(userId);
  res.json(user);
});

// create user

router.route('/').post(async (req, res) => {
  usersService.addNew({...req.body, id: uuid.v1()});
  res.json(usersService.users);
});

// update user

router.route('/:userId').put(async (req, res) => {
  const {userId} = req.params;
  const user = usersService.getById(userId);
  Object.assign(user, req.body);
  res.json(usersService.users);
});

// delete user

router.route('/:userId').delete(async (req, res) => {
  const {userId} = req.body;
  usersService.deleteByIndex(userId);
  res.json(usersService.users);
});

module.exports = router;
