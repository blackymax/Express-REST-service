import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Board from "../../entity/board.model";
import { TaskModule } from "../task/task.module";
import { BoardController } from "./board.controller";
import { BoardService } from "./board.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([Board]),
        TaskModule
    ],
    controllers: [BoardController],
    providers: [BoardService],
    exports: [BoardService]
})
export class BoardModule{}