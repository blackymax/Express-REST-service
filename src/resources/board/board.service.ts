import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Board from '../../entity/board.model';
import Task from '../../entity/task.model';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepo: Repository<Board>,
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
  ){}
  async getAll(): Promise<Board[]> {
    return this.boardRepo.find();
  }
  async createBoard(obj: Board): Promise<Board> {
    const newBoard = this.boardRepo.create(obj);
    return this.boardRepo.save(newBoard);
  }
  async getById(id?: string): Promise<Board | undefined> {
    return this.boardRepo.findOne(id);
  }
  async updateBoard(
    id: string,
    obj: Partial<Board>
  ): Promise<Board | undefined> {
    const { columns, ...otherData } = obj;
    const newBoard = await this.boardRepo.update(id, otherData);
    return newBoard.raw;
  }
  async deleteBoard(id: string): Promise<void> {
    await Promise.all([this.taskRepo.delete({ boardId: id }), this.boardRepo.delete(id)]);
  }
}
