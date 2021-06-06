import fs from 'fs';
import { NextFunction, Request, Response } from "express";

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';

export const errorLogger = (err: Error, _req: Request, res: Response, next: NextFunction):void => {
  const errorLogInfo = `${new Date().toUTCString()}; status: ${res.status};error: ${err.message}; error-type: Internal Server Error ${newLineChar}`
  fs.appendFileSync(__dirname + '/../../logs/error_log.txt', errorLogInfo);
  process.stdout.write(errorLogInfo)
  res.status(500).send(`${err}: Internal Server Error`);
  next();
}