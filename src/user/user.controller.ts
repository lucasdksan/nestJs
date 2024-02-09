import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller("users")
export class UserController {
    @Post()
    async create(@Body() body) {
        return { body };
    }

    @Get()
    async read() {
        return { data: [] }
    }

    @Get(":id")
    async readOne(@Param() param) {
        return { user: {}, param }
    }
}