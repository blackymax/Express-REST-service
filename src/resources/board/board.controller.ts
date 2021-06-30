import { Get, Post, Put, Delete, Controller, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import Board from '../../entity/board.model';
import { AuthGuard } from '../../guards/authGuard';
import { BoardService } from './board.service';

@Controller('/boards')
@UseGuards(AuthGuard)
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Get()
  async getAll(@Req() _req: Request, @Res() res: Response): Promise<void> {
    const boards: Board[] | undefined = await this.boardService.getAll();
    res.status(200).json(boards);
  }

  @Get('/:boardId')
  async getById(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { boardId } = req.params;
    const find = await this.boardService.getById(boardId);
    if (find) {
      res.status(200).json(find);
    } else {
      res.status(404).json({ message: 'board not found' });
    }
  }

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<void> {
    const newBoard = await this.boardService.createBoard(req.body);
    res.status(201).json(newBoard);
  }

  @Put('/:boardId')
  async update(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { boardId } = req.params;
    const newBoard = await this.boardService.updateBoard(
      boardId as string,
      req.body
    );
    res.status(200).json(newBoard as Board);
  }

  @Delete('/:boardId')
  async delete(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { boardId } = req.params;
    const result = await this.boardService.deleteBoard(boardId as string);
    res.status(200).json(result);
  }
}
