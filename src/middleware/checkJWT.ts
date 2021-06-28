import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../common/config';

const urls = ['/doc', '/', '/login'];
const JWT_SECRET_KEY = env.JWT_SECRET_KEY || '';

function checkTokenIsCorrect(req: Request, res: Response, next: NextFunction): Response|void {
    if (urls.includes(req.url)) {
        return next();
    } else {
        const head = req.headers.authorization;
        if (head) {
            const [type, token] = head.split(' ');
            if (type !== 'Bearer' || !token) {
                return res.status(401).send({message: 'Wrong auth scheme'});
            }
            jwt.verify(token, JWT_SECRET_KEY, {complete: true});
            return next();
        }
        return res.status(401).send({message: "Not authorized"});
    }
}

export { checkTokenIsCorrect }