import { Request, Response } from "express";

export {}
const router = require('express').Router();
const uuid = require('uuid');
const User = require('./user.model');
const usersService = require('./user.service');

// get all users

router.route('/').get(async (_req: Request, res:Response):Promise<void> => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

// get the user by id

router.route('/:userId').get(async (req:Request, res:Response):Promise<void> => {
  const {userId} = req.params;
  const user = await usersService.getById(userId);
  res.status(200).json(User.toResponse(user));
});

// create user

router.route('/').post(async (req:Request, res:Response):Promise<void> => {
  const user = await usersService.addNew({...req.body, id: uuid.v1()});
  res.status(201).json(User.toResponse(user));
});

// update user

router.route('/:userId').put(async (req:Request, res:Response):Promise<void> => {
  const {userId} = req.params;
  const user = await usersService.updateUser(userId, req.body);
  res.status(200).json(User.toResponse(user));
});

// delete user

router.route('/:userId').delete(async (req:Request, res:Response):Promise<void> => {
  const {userId} = req.params;
  const users = await usersService.deleteByIndex(userId);
  res.status(200).json(users);
});

module.exports = router;
