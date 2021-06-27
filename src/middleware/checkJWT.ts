import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = process.env['JWT_SECRET_KEY']

function checkTokenIsCorrect(req: Request, res: Response, next: NextFunction): Response|void {
    switch (req.url) {
        case '/':
        case '/login':
        case '/doc': {
            return next();
        }
        default: {
            const head = req.headers.authorization;
            if (head !== undefined) {
                const [type, token] = head.split(' ');
                if (type !== 'Bearer' || !token) {
                    return res.status(401).send({message: 'Wrong auth scheme'});
                }
                jwt.verify(token, String(JWT_SECRET_KEY), {complete: true});
                return next();
            }
            return res.status(401).send({message: "Not authorized"});
        }
    }

}

export { checkTokenIsCorrect }