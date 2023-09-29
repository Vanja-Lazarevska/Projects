export interface User {
    id: number,
    username: string,
    password: string
}

export interface UserRegister {
    name:string,
    lname: string,
    username: string,
    password: string
}

export interface UserToSave {
    username: string,
    password: string
}