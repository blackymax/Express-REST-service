const router = require('express').Router();
const uuid = require('uuid');
const User = require('./user.model');
const usersService = require('./user.service');

// get all users

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

// get the user by id

router.route('/:userId').get(async (req, res) => {
  const {userId} = req.params;
  const user = usersService.getById(userId);
  res.status(200).json(User.toResponse(user));
});

// create user

router.route('/').post(async (req, res) => {
  const user = await usersService.addNew({...req.body, id: uuid.v1()});
  res.status(201).json(User.toResponse(user));
});

// update user

router.route('/:userId').put(async (req, res) => {
  const {userId} = req.params;
  const user = usersService.updateUser(userId, req.body);
  res.status(200).json(User.toResponse(user));
});

// delete user

router.route('/:userId').delete(async (req, res) => {
  const {userId} = req.params;
  usersService.deleteByIndex(userId);
  res.status(200).json(usersService.users);
});

module.exports = router;
