import { IBoard, IUser, ITask } from '../interfaces/index';
import { getConnection, createConnection } from 'typeorm';
import { config } from './ormconfig';

interface DataBase {
    boards: IBoard[]
    users: IUser[],
    tasks: ITask[] 
}

const connectToDB = async () => {
    let connection;
    try{
        connection = await getConnection()
    } catch(err) {
        console.log('Error: '+err)
    }
    try{
        if (connection) {
            if (!connection.isConnected) await connection.connect()
        } else {
            createConnection(config)
        }
        console.log('Successfully connected!')
    } catch (err) {
        console.log('Connection Error! ', err)
    }
}

export const TryDBConnect = async (cb: ()=>void) => {
    try {
        await connectToDB();
        cb();
    } catch (err) {
        console.log('DB Connection Error! ', err)
    }
}

export const db: DataBase = {
    boards: [],
    users: [],
    tasks: [] 
};