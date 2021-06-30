import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import User from "../../entity/user.model";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";



@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [LoginController],
    providers: [LoginService],
    exports: [LoginService]
})
export class LoginModule{}