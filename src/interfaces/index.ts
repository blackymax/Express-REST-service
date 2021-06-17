export interface IBoard {
  id: string;
  title: string;
  columns?: IColumn[] | null;
}
export interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}
export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}
export interface IColumn {
  id: string;
  title: string;
  order: number;
}
export interface Params {
  params: {
    boardId: string;
    taskId: string;
    userId: string;
  };
}
