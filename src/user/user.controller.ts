import { Body, Controller, Delete, Get, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { ParamId } from "src/decorators/param-id.decorator";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/enums/role.enums";
import { RoleGuard } from "src/guards/role.guard";
import { AuthGuard } from "src/guards/auth.guard";

// @UseInterceptors(LogInterceptors)
@UseGuards(AuthGuard, RoleGuard)
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Roles(Role.Admin)
    @Post()
    async create(@Body() body: CreateUserDTO) {
        return this.userService.create(body);
    }

    @Roles(Role.Admin)
    @Get()
    async read() {
        return this.userService.list();
    }

    @Roles(Role.Admin)
    @Get(":id")
    async readOne(@ParamId() id) {
        return this.userService.show(id)
    }

    @Roles(Role.Admin)
    @Put(":id")
    async update(@Body() body: UpdatePutUserDTO,@ParamId() id) {
        return this.userService.updatePut(id, body)
    }

    @Roles(Role.Admin)
    @Patch(":id")
    async updatePartial(@Body() body: UpdatePatchUserDTO, @ParamId() id) {
        return this.userService.updatePatch(id, body)
    }

    @Roles(Role.Admin)
    @Delete(":id")
    async delete(@ParamId() id){
        return this.userService.delete(id);
    }
}