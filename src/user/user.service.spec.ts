import { userPrismaList } from './../testing/user-prisma-list.mock';
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { userPrismaMock } from "../testing/user-prisma.mock";
import { CreateUserDTO } from "./dto/create-user.dto";
import { Role } from '../enums/role.enums';

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

    describe("Read", () => { });
    describe("Update", () => { });
    describe("Delete", () => { });
});