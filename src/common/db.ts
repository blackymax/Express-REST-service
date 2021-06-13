import { IBoard, IUser, ITask } from '../interfaces/index';

interface DataBase {
    boards: IBoard[]
    users: IUser[],
    tasks: ITask[] 
}

export const db: DataBase = {
    boards: [],
    users: [],
    tasks: [] 
};