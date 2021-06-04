import { NextFunction, Request, Response } from 'express';
import finished from 'on-finished';
import fs from 'fs';

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';

export const logging = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    const {url, method} = req;
    const start = Date.now();
    const currentTime = new Date();
    if (err) {
        
    }
    
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