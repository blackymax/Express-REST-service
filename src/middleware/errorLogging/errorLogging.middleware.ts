import fs from 'fs';
import { Response } from "express";
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';

@Catch(HttpException)
export class errorLogger implements ExceptionFilter{
  public catch(err: Error, host: ArgumentsHost):Response | void {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const next = ctx.getNext();
    const errorLogInfo = `${new Date().toUTCString()}; status: ${HttpStatus.INTERNAL_SERVER_ERROR};error: ${err.message}; error-type: Internal Server Error ${newLineChar}`
    fs.appendFileSync(__dirname + '/../../../logs/error_log.txt', errorLogInfo);
    process.stdout.write(errorLogInfo)
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`${err}: Internal Server Error`);
    next();
  }
}