import { Role } from "../enums/role.enums";

export const userPrismaList = [
    {
        id: 1,
        name: "Lucas Silva",
        email: "lokasmega@gmail.com",
        password: "123456789",
        birth_at: "1998-11-07T00:30:00Z",
        role: Role.User,
        created_at: new Date("1998-11-07"),
        update_at: new Date("1998-11-07")
    },
    {
        id: 2,
        email: "jotta@gmail.com",
        name: "Jotinha",
        password: "Aiqu,edelica",
        birth_at: "1998-11-07T00:30:00Z",
        role: Role.User,
        created_at: new Date("1998-11-07"),
        update_at: new Date("1998-11-07")
    },
    {
        id: 3,
        email: "jotta@gmail.com",
        name: "Jotinha",
        password: "Aiqu,edelica",
        birth_at: "1998-11-07T00:30:00Z",
        role: Role.User,
        created_at: new Date("1998-11-07"),
        update_at: new Date("1998-11-07")
    }
]