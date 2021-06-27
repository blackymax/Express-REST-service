// import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import express, { Request, Response } from 'express';
import asyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken';
import { checkUser } from "./service";

const JWT_SECRET_KEY = process.env['JWT_SECRET_KEY']
const loginRouter = express.Router();

loginRouter.route('/').post(asyncHandler(async (req: Request, res: Response) => {
    const user = req.body;
    const userFound = await checkUser(user);
    if (userFound) {
        const part = { userId: userFound.id, login: userFound.login };
        const token = jwt.sign(part, String(JWT_SECRET_KEY));
        console.log('this '+ token)
        return res.status(200).json({token: token});
    }
    return res.status(401).json({message: "Not authorized"});
}));

export default loginRouter;