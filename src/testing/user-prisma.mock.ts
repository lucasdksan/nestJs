import { PrismaService } from "../prisma/prisma.service";
import { userPrismaList } from "./user-prisma-list.mock";

export const userPrismaMock = {
    provide: PrismaService,
    useValue: {
        user: {
            create: jest.fn().mockResolvedValue(userPrismaList[0]),
            findMany: jest.fn().mockResolvedValue(userPrismaList),
            findUnique: jest.fn().mockResolvedValue(userPrismaList[0]),
            update: jest.fn().mockResolvedValue(userPrismaList[0]),
            delete: jest.fn().mockResolvedValue(true),
            count: jest.fn().mockResolvedValue(true),
        }
    },
}