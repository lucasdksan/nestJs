import { Body, Controller, Delete, Get, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { Roles } from "../decorators/roles.decorator";
import { Role } from "../enums/role.enums";
import { AuthGuard } from "../guards/auth.guard";
import { RoleGuard } from "../guards/role.guard";
import { ParamId } from "../decorators/param-id.decorator";

// @UseInterceptors(LogInterceptors)
@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() body: CreateUserDTO) {
        return this.userService.create(body);
    }

    @Get()
    async read() {
        return this.userService.list();
    }

    @Get(":id")
    async readOne(@ParamId() id) {
        return this.userService.show(id)
    }

    @Put(":id")
    async update(@Body() body: UpdatePutUserDTO,@ParamId() id) {
        return this.userService.updatePut(id, body)
    }

    @Patch(":id")
    async updatePartial(@Body() body: UpdatePatchUserDTO, @ParamId() id) {
        return this.userService.updatePatch(id, body)
    }

    @Delete(":id")
    async delete(@ParamId() id){
        return this.userService.delete(id);
    }
}