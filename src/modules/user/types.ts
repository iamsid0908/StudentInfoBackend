import { User } from "../../models/interface"


export type AddUserReq = {
    data:User
}

export type UpdateUserReq = {
    userId: string
    data: Partial<User>
}

// export type DeleteUserReq = {
//     userId: string
// }