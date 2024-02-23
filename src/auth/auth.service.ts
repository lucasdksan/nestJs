import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import * as bcrypt from "bcrypt";
import { MailerService } from "@nestjs-modules/mailer";
import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
    private issuer = "login";
    private audience = "users";

    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService,
        private readonly useService: UserService,
        private readonly mailer: MailerService
    ) { }

    createToken(user: User) {
        return {
            token: this.jwtService.sign({
                id: user.id,
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

    checkToken(token: string) {
        try {
            const data = this.jwtService.verify(token, {
                issuer: "login",
                audience: "users"
            });

            return data;
        } catch (error) {
            throw new BadRequestException(error);

        }
    }

    isValidToken(token: string) {
        try {
            this.checkToken(token);
            return true;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });

        if (!user) {
            throw new UnauthorizedException("Email e/ou senha incorretos!");
        }

        if (await bcrypt.compare(password, user.password)) {
            return this.createToken(user);
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

        if (!user) {
            throw new UnauthorizedException("Email está incorreto!");
        }

        const token = this.jwtService.sign({
            id: user.id,
        }, {
            expiresIn: "30 minutes",
            subject: String(user.id),
            issuer: "forget",
            audience: "users"
        });

        await this.mailer.sendMail({
            subject: "Recuperação de Senha",
            to: email,
            template: "forget",
            context: {
                name: user.name,
                token
            }
        });

        return true;
    }

    async reset(password: string, token: string) {
        try {
            const data: any = this.jwtService.verify(token, {
                issuer: "forget",
                audience: "users"
            });

            if (isNaN(Number(data.id))) {
                throw new BadRequestException("Token não é valido");
            }

            const salt = await bcrypt.genSalt();
            const pass = await bcrypt.hash(password, salt);

            const user = await this.prisma.user.update({
                where: {
                    id: data.id
                },
                data: {
                    password: pass,
                }
            });

            return this.createToken(user);
        } catch (error) {
            throw new BadRequestException(error);

        }
    }

    async register(data: AuthRegisterDTO) {
        const user = await this.useService.create(data);

        return this.createToken(user);
    }
}