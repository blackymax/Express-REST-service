import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BoardController } from "../../resources/board/board.controller";
import { BoardModule } from "../../resources/board/board.module";
import { LoginController } from "../../resources/login/login.controller";
import { TaskController } from "../../resources/task/task.controller";
import { TaskModule } from "../../resources/task/task.module";
import { UserController } from "../../resources/users/user.controller";
import { UserModule } from "../../resources/users/user.module";
import { Logger } from "./loggingHandler.middleware";

@Module({
    imports: [BoardModule, TaskModule, UserModule]
})
export class AppLogger implements NestModule{
    configure(consumer: MiddlewareConsumer): void {
        consumer
          .apply(Logger)
          .forRoutes(BoardController, TaskController, UserController, LoginController);
      }
}