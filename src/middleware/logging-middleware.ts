import { NextFunction, Request, Response } from 'express';
import finished from 'on-finished';
import fs from 'fs';

export const handlerExceptions = (req: Request, res: Response, next: NextFunction): void => {
    const {url, method} = req;
    const start = Date.now();

    next();

    finished(res, () => {
        const time = Date.now() - start;
        const { statusCode } = res;
        const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';
        const logInfo = `${newLineChar}${method} ${url} ${statusCode} [${time} ms]`
        try{
        fs.accessSync(__dirname + '/../../logs/log_info.txt', fs.constants.W_OK | fs.constants.R_OK);
            console.log('OK')
        }
        catch(err){
            console.log(err)
        }
        fs.appendFileSync(__dirname + '/../../logs/log_info.txt', logInfo);
        console.log( logInfo)
    })
}