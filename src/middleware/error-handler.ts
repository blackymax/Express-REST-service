import fs from 'fs';

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';

export const handleErrors = (): void => {
    process.on('uncaughtException', (err:Error) => {
        const currTime = new Date();
        const errorLogInfo = `Date: ${currTime.toUTCString()}; status: 500; error: ${err.name} ${err.message}; error-type: uncaughtException${newLineChar} `
        fs.appendFileSync(__dirname + '/../../logs/error_log.txt', errorLogInfo);
        console.error(errorLogInfo);
        process.stdout.write(errorLogInfo);

    })
    process.on('unhandledRejection', (err: Error) => {
        const currTime = new Date();
        const errorLogInfo = `Date: ${currTime.toUTCString()}; status: 500; error: ${err.message}; error-type: unhandledRejection${newLineChar}`
        fs.appendFileSync(__dirname + '/../../logs/error_log.txt', errorLogInfo);
        process.stdout.write(errorLogInfo);
    })
}