import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "src/user/user.service";
import { AuthRegisterDTO } from "./dto/auth-register.dto";

@Injectable()
export class AuthServide {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService,
        private readonly useService: UserService
    ) { }

    async createToken(user: User) {
        return {
            token: this.jwtService.sign({
                sub: user.id,
                name: user.name,
                email: user.email,
            }, {
                expiresIn: "7 days",
                subject: String(user.id),
                issuer: "login",
                audience: "users"
            })
        }
    }

    async checkToken() {
        // return this.jwtService.verify();
    }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });

        if(!user) {
            throw new UnauthorizedException("Email e/ou senha incorretos!");
        }

        if(password === user.password) {
            return await this.createToken(user);
        } else {
            throw new UnauthorizedException("Email e/ou senha incorretos!");
        }
    }   

    async forget(email: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });

        if(!user) {
            throw new UnauthorizedException("Email está incorreto!");
        }

        return true;
    }

    async reset(password: string, token: string) {
        // Validar o token

        const id = 0;

        const user = await this.prisma.user.update({
            where: {
                id
            },
            data: {
                password,
            }
        });

        return await this.createToken(user);
    }

    async register(data: AuthRegisterDTO){
        const user = await this.useService.create(data);

        return this.createToken(user);
    }
}