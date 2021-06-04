import fs from 'fs';
import { Request, Response, NextFunction } from 'express';

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';

export const handleErrors = (_req:Request, _res:Response, _next: NextFunction): void => {
    process.on('uncaughtException', (err:Error) => {
        const currTime = new Date();
        const errorLogInfo = `Date: ${currTime.toUTCString()}; status: 500; error: ${err.name} ${err.message}; error-type: uncaughtException${newLineChar} `
        fs.appendFileSync(__dirname + '/../../logs/error_log.txt', errorLogInfo);
        console.error(errorLogInfo);
        process.exit(1);

    })
    process.on('unhandledRejection', (err: Error) => {
        const currTime = new Date();
        const errorLogInfo = `Date: ${currTime.toUTCString()}; error: ${err.message}; error-type: unhandledRejection${newLineChar}`
        fs.appendFileSync(__dirname + '/../../logs/error_log.txt', errorLogInfo);
        console.error(errorLogInfo);
        process.exit(1);
    })
}