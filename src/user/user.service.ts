import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService){}

    async create(data: CreateUserDTO){
        return await this.prisma.user.create({
            data
        });
    }

    async list(){
        return await this.prisma.user.findMany();
    }

    async show(id: string){
        return await this.prisma.user.findUnique({
            where: { id }
        });
    }

    async updatePut(id: string, data: UpdatePutUserDTO) {
        return await this.prisma.user.update({
            where: { id },
            data
        });
    }

    async updatePatch(id: string, data: UpdatePatchUserDTO) {
        return await this.prisma.user.update({
            where: { id },
            data
        });
    }
}