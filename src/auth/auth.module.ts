import { Module, forwardRef } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { env } from "../env";
import { PrismaModule } from "../prisma/prisma.module";
import { FileModule } from "../file/file.module";

@Module({
    imports: [
        JwtModule.register({
            secret: env.JWT_SECRET
        }),
        forwardRef(() => UserModule),
        PrismaModule,
        FileModule
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule { }