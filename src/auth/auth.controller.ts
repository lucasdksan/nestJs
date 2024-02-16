import { UserService } from './../user/user.service';
import { BadRequestException, Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth-login.dto";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { AuthForgetDTO } from "./dto/auth-forget.dto";
import { AuthResetDTO } from "./dto/auth-reset.dto";
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { FileService } from 'src/file/file.service';

@Controller("auth")
export class AuthController {
    constructor (
        private readonly userService: UserService,
        private readonly authService: AuthService,
        private readonly fileServie: FileService
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

    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor("file"))
    @Post("photo")
    async uploadPhoto(@User() user, @UploadedFile("file") photo: Express.Multer.File ) {
        const path = join(__dirname, "../", "..", "storage", "photos", `photo-${user.id}.png`);
        
        try {
            await this.fileServie.uploadPhoto( photo, path);
        } catch (error) {
            throw new BadRequestException(error);
        }

        return  { sucess: true };
    }
}