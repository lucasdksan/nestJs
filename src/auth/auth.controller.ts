import { UserService } from './../user/user.service';
import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth-login.dto";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { AuthForgetDTO } from "./dto/auth-forget.dto";
import { AuthResetDTO } from "./dto/auth-reset.dto";
import { AuthServide } from './auth.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/decorators/user.decorator';

@Controller("auth")
export class AuthController {
    constructor (
        private readonly userService: UserService,
        private readonly authService: AuthServide
    ) {}

    @UseGuards(AuthGuard)
    @Post("me")
    async me(@User() user){
        return { user };
    }

    @Post("login")
    async loign(@Body() body: AuthLoginDTO) {
        return await this.authService.login(body.email, body.password);
    }

    @Post("register")
    async register(@Body() body: AuthRegisterDTO) {
        return await this.authService.register(body);
    }

    @Post("forget")
    async forget(@Body() body: AuthForgetDTO) { 
        return await this.authService.forget(body.email);
    }

    @Post("reset")
    async reset(@Body() body: AuthResetDTO) {
        return await this.authService.reset(body.password, body.token);
    }
}