import { getConnection, createConnection } from 'typeorm';
import { config } from './ormconfig';

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

export const TryDBConnect = async (cb: ()=>void):Promise<void> => {
    try {
        await connectToDB();
        cb();
    } catch (err) {
        console.log('DB Connection Error! ', err)
    }
}