import { Controller, Delete, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import User, { IUser } from '../../entity/user.model';
import { AuthGuard } from '../../guards/authGuard';
import { UserService } from './user.service';

@UseGuards(AuthGuard)
@Controller('/users')
export class UserController {
  constructor(
    private readonly userService:UserService
  ){}
  @Get('/')
  async getAll(@Req() _req: Request, @Res() res: Response): Promise<void> {
    const result = await this.userService.getAll();
    res.status(200).send(result.map(User.toResponse));
  }

  @Get('/:userId')
  async getById(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { userId } = req.params;
    const user = await this.userService.getById(userId as string);
    res.status(200).send(User.toResponse(user as IUser));
  }

  @Post('/')
  async createUser(@Req() req: Request,@Res()  res: Response): Promise<void> {
    const user = await this.userService.addNew({ ...req.body });
    res.status(201).send(User.toResponse(user));
  }

  @Put('/:userId')
  async updateUser(@Req() req: Request,@Res()  res: Response): Promise<void> {
    const { userId } = req.params;
    const user = await this.userService.updateUser(userId as string, req.body);
    res.status(200).send(User.toResponse(user as IUser));
  }

  @Delete('/:userId')
  async deleteById(@Req() req: Request,@Res()  res: Response): Promise<void> {
    const { userId } = req.params;
    const users = await this.userService.deleteByIndex(userId as string);
    res.status(200).send(users.map(User.toResponse));
  }
}
