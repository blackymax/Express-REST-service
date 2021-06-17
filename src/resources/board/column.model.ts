import { v4 as uuid } from 'uuid';
import { IColumn } from '../../interfaces';

export default class Column implements IColumn {
  id: string;
  title: string;
  order: number;

  constructor({ id = uuid(), title = 'Title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}
