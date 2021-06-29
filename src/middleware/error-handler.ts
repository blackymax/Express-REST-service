import fs from 'fs';

enum ErrorTypes {
    uncaughtException = 'uncaughtException',
    unhandledRejection = 'unhandledRejection'
}
const defaultStatus = 500;

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';
const errorHandler = (errType: ErrorTypes) => (err: Error) => {
    const currTime = new Date();
    const errorLogInfo = `Date: ${currTime.toUTCString()}; status: ${defaultStatus}; error: ${
      err.message
    }; error-type: ${errType} ${newLineChar}`;
    fs.appendFileSync(__dirname + '/../../logs/error_log.txt', errorLogInfo);
    process.stdout.write(errorLogInfo);
    process.exit(1);
};

export const handleErrors = (): void => {
    process.on(ErrorTypes.uncaughtException, errorHandler(ErrorTypes.uncaughtException));
    process.on(ErrorTypes.unhandledRejection, errorHandler(ErrorTypes.unhandledRejection));
};
