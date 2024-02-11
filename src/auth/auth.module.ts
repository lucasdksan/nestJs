import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthServide } from "./auth.service";

@Module({
    imports: [
        JwtModule.register({
            secret: "=Kb~<J%@XGq:Xt@_5r4ç"
        }),
        UserModule,
        PrismaModule
    ],
    controllers: [AuthController],
    providers: [AuthServide]
})
export class AuthModule { }