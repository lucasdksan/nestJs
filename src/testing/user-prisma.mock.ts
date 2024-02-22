import { PrismaService } from "../prisma/prisma.service";
import { userPrismaList } from "./user-prisma-list.mock";

export const userPrismaMock = {
    provide: PrismaService,
    useValue: {
        create: jest.fn().mockResolvedValue(userPrismaList[0]),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        count: jest.fn(),
    },
}