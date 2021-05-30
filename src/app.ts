import express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import YAML from 'yamljs';
import * as userRouter from './resources/users/user.router';
import * as boardRouter from './resources/board/board.router';
import * as taskRouter from './resources/task/task.router';

export const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/users', userRouter.router);
app.use('/boards', boardRouter.router);
app.use('/boards/:boardId/tasks', taskRouter.router);
