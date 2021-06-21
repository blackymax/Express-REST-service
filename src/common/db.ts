import { createConnection } from 'typeorm';
import config from './ormconfig';

export const TryDBConnect = async (cb: ()=>void):Promise<void> => {
    try {
        createConnection(config)
        cb();
    } catch (err) {
        console.log('DB Connection Error! ', err)
    }
}