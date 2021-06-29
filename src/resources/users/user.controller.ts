import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import User, { IUser } from '../../entity/user.model';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(
    private readonly userService:UserService
  ){}
  @Get('/')
  async getAll(@Req() req: Request, @Res() res: Response): Promise<void> {
    console.log(req.url)
    res.status(200).json([1,2,3,4,5,6]);
  }

  @Get('/:userId')
  async getById(@Req() req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    const user = await this.userService.getById(userId as string);
    res.status(200).json(User.toResponse(user as IUser));
  }

  @Post('/')
  async createUser(@Req() req: Request, res: Response): Promise<void> {
    const user = await this.userService.addNew({ ...req.body });
    res.status(201).json(User.toResponse(user));
  }

  @Put('/:userId')
  async updateUser(@Req() req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    const user = await this.userService.updateUser(userId as string, req.body);
    res.status(200).json(User.toResponse(user as IUser));
  }

  @Delete('/:userId')
  async deleteById(@Req() req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    const users = await this.userService.deleteByIndex(userId as string);
    res.status(200).json(users.map(User.toResponse));
  }
}
