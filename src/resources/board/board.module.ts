import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Board from "../../entity/board.model";
import Task from "../../entity/task.model";
import { BoardController } from "./board.controller";
import { BoardService } from "./board.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([Board, Task]),
    ],
    controllers: [BoardController],
    providers: [BoardService],
    exports: [BoardService]
})
export class BoardModule{}