import fs from 'fs';

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';
const errorHandler = (err: Error) => {
    const currTime = new Date();
    const errorLogInfo = `Date: ${currTime.toUTCString()}; status: 500; error: ${err.message}; error-type: unhandledRejection${newLineChar}`
    fs.appendFileSync(__dirname + '/../../logs/error_log.txt', errorLogInfo);
    process.stdout.write(errorLogInfo);
    process.exit(1);
}

export const handleErrors = (): void => {
    process.on('uncaughtException', errorHandler)
    process.on('unhandledRejection',errorHandler)
}