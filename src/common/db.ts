import { createConnection } from 'typeorm';
// import { createAdmin } from '../resources/createAdmin';
import config from './ormconfig';

export const TryDBConnect = async (cb: ()=>void):Promise<void> => {
    try {
        await createConnection(config)
        // await createAdmin()
        cb();
    } catch (err) {
        console.log('DB Connection Error! ', err)
    }
}