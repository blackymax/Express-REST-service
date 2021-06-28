import express, { Request, Response } from 'express';
import asyncHandler from "express-async-handler";
import { validate } from "./service";

const loginRouter = express.Router();

loginRouter.route('/').post(asyncHandler(async (req: Request, res: Response) => {
    await validate(req.body, res)
}));

export default loginRouter;