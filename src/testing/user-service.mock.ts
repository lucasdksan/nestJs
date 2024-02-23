import { UserService } from "../user/user.service";

export const userServiceMock = {
    provide: UserService,
    useValue: {
        create: jest.fn()
    }
}