import { NextFunction, Request, Response } from 'express';
import finished from 'on-finished';
import fs from 'fs';

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';

export const logging = (req: Request, res: Response, next: NextFunction): void => {
    const {url, method} = req;
    const start = Date.now();
    const currentTime = new Date();
    
    next();

    finished(res, () => {
        const time = Date.now() - start;
        const { statusCode } = res;
        const requestData: string | null = JSON.stringify(req.body);
        const logInfo = `Date: ${currentTime.toUTCString()}; Method: [${method}]; Query params: [${JSON.stringify(req.query)}] request body: [${requestData}]; URL: ${url}; status code: ${statusCode}; time for response: [${time} ms]${newLineChar}`
        fs.appendFileSync(__dirname + '/../../logs/log_info.txt', logInfo);
        process.stdout.write(logInfo)
    })
}