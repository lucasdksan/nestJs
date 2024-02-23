import { userPrismaList } from './../testing/user-prisma-list.mock';
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { userPrismaMock } from "../testing/user-prisma.mock";
import { CreateUserDTO } from "./dto/create-user.dto";
import { Role } from '../enums/role.enums';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

describe("UserService", () => {
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                userPrismaMock,
            ],
        }).compile();

        userService = module.get<UserService>(UserService);
    });

    test("Validar a definição", () => {
        expect(userService).toBeDefined();
    });

    describe("Create", () => {
        test("Method Create", async () => {
            const data: CreateUserDTO = {
                name: "Lucas Silva",
                email: "lokasmega@gmail.com",
                password: "123456789",
                birth_at: "1998-11-07T00:30:00Z",
                role: Role.User
            };

            const result = await userService.create(data);
            expect(result).toEqual(userPrismaList[0]);
        });
    });

    describe("Read", () => {
        test("Method List", async () => {
            const result = await userService.list();

            expect(result).toEqual(userPrismaList);
        });

        test("Method Show", async () => {
            const result = await userService.show(1);

            expect(result).toEqual(userPrismaList[0]);
        });
    });
    describe("Update", () => {
        test("Method Update", async ()=> {
            const data: CreateUserDTO = {
                name: "Lucas Silva Leoncio",
                email: "lokasmega@gmail.com",
                password: "123456789",
                birth_at: "1998-11-07T00:30:00Z",
                role: Role.User
            };

            const result = await userService.updatePut(1, data);

            expect(result).toEqual(userPrismaList[0]);
        });

        test("Method Update Partial", async ()=> {
            const data: UpdatePatchUserDTO = {
                role: Role.Admin
            };

            const result = await userService.updatePatch(1, data);

            expect(result).toEqual(userPrismaList[0]);
        });
    });
    describe("Delete", () => { 
        test("Method Delete", async ()=> {
            const result = await userService.delete(1);

            expect(result).toEqual(true);
        });
    });
});