import { IBoard, IColumn } from '../../interfaces';
import { v4 as uuid } from 'uuid';
import Column from './column.model';

export default class Board implements IBoard {
  id: string;
  title: string;
  columns: IColumn[];

  constructor({
    id = uuid(),
    title = 'board_title',
    columns = [new Column()],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: IBoard): IBoard {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}
