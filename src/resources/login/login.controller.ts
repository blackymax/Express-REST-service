import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../../common/config';
import { LoginService } from './login.service';

const JWT_SECRET_KEY = env.JWT_SECRET_KEY || '';

@Controller('/login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService
    ) {}
  @Post('/')
  async login(@Req() req: Request, @Res() res: Response): Promise<Response|void> {
    try {
      const userFound = await this.loginService.checkUser(req.body);
      if (userFound) {
        const part = { userId: userFound.id, login: userFound.login };
        const token = jwt.sign(part, JWT_SECRET_KEY);
        return res.status(200).json({ token: token });
      }
      return res.status(403).json({ message: 'Forbidden' });
    } catch (err) {
      return res.status(401).json({ message: `Not Authorized, ${err}` });
    }
  }
}
