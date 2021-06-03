import { NextFunction, Request, Response } from 'express';
import finished from 'on-finished';
import fs from 'fs';

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';
export const handleErrors = (_req:Request, res:Response, next: NextFunction): void => {
    process.on('uncaughtException', (err:Error) => {
        const currTime = new Date();
        const errorLogInfo = `Date: ${currTime.toUTCString()}; status: 500; error: ${err.name} ${err.message}; error-type: uncaughtException${newLineChar} `
        fs.appendFileSync(__dirname + '/../../logs/error_log.txt', errorLogInfo);
        console.error(errorLogInfo);
        return res.status(500).send({message: "Internal Server Error"});

    })
    process.on('unhandledRejection', (err: Error) => {
        const currTime = new Date();
        const errorLogInfo = `Date: ${currTime.toUTCString()}; error: ${err.message}; error-type: unhandledRejection${newLineChar}`
        fs.appendFileSync(__dirname + '/../../logs/error_log.txt', errorLogInfo);
        console.error(errorLogInfo);
        return res.status(500).send({message: "Internal Server Error"});
    })
    next()
}

export const logging = (req: Request, res: Response, next: NextFunction): void => {
    const {url, method} = req;
    const start = Date.now();
    const currentTime = new Date();
    next();

    finished(res, () => {
        const time = Date.now() - start;
        const { statusCode } = res;
        const requestData: string | null = req.body
            ? Object.entries(req.body).map((el)=>el.join(' : ')).join(' ,')
            : 'null'
        const logInfo = `Date: ${currentTime.toUTCString()}; Method: ${method}; request body: [${requestData}]; URL: ${url}; status code: ${statusCode}; time for response: [${time} ms]${newLineChar}`
        fs.appendFileSync(__dirname + '/../../logs/log_info.txt', logInfo);
    })
}