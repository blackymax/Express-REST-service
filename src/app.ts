import express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import YAML from 'yamljs';
import * as userRouter from './resources/users/router';
import * as boardRouter from './resources/board/router';
import * as taskRouter from './resources/task/router';
import loginRouter from './resources/login/router';
import { logging } from './middleware/logging-handler';
import cors from 'cors';
import { handleErrors } from './middleware/error-handler';
import { errorLogger } from './middleware/error-logging';
import { checkTokenIsCorrect } from './middleware/checkJWT';

export const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express.json());
app.use(cors());
handleErrors();
app.use(logging);
app.use(checkTokenIsCorrect)
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/users', userRouter.router);
app.use('/boards', boardRouter.router);
app.use('/boards/:boardId/tasks', taskRouter.router);
app.use('/login', loginRouter)
app.use(errorLogger);
