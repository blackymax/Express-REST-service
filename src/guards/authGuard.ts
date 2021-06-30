import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import jwt from 'jsonwebtoken';
import { env } from '../common/config';

const JWT_SECRET_KEY = env.JWT_SECRET_KEY || '';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    try {
      const head = req.headers.authorization;
      if (head) {
        const [type, token] = head.split(' ');
        if (!token) {
          return res.status(401).send({ message: 'Wrong token' });
        } else if (type !== 'Bearer') {
          return res.status(401).send({ message: 'Wrong auth scheme' });
        } else {
          jwt.verify(token, JWT_SECRET_KEY);
          return true;
        }
      }
      return res.status(401).send({ message: 'Not authorized' });
    } catch (err) {
      return res.status(403).send({ message: 'Wrong token' });
    }
  }
}
