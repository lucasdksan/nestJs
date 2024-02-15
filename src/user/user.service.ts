import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { NotFoundError } from "rxjs";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateUserDTO) {
        return await this.prisma.user.create({
            data
        });
    }

    async list() {
        return await this.prisma.user.findMany();
    }

    async show(id: number) {
        return await this.prisma.user.findUnique({
            where: { id }
        });
    }

    async updatePut(id: number, data: UpdatePutUserDTO) {
        await this.exists(id);

        return await this.prisma.user.update({
            where: { id },
            data: { birth_at: data.birth_at ? new Date(data.birth_at) : null, ...data }
        });
    }

    async updatePatch(id: number, data: UpdatePatchUserDTO) {
        await this.exists(id);

        let birthAt = null;
        if (data.birth_at) {
            birthAt = new Date(data.birth_at).toISOString();
        }

        return await this.prisma.user.update({
            where: { id },
            data: { birth_at: birthAt, ...data }
        });

    }

    async delete(id: number) {
        await this.exists(id);

        return await this.prisma.user.delete({
            where: { id }
        });
    }

    async exists(id: number) {
        if (!(await this.prisma.user.count({ where: { id } }))) {
            throw new NotFoundError(`User not exist`);
        }
    }
}