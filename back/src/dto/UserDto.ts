export interface UserRegisterDto{
    name: string;
    email: string;
    username: string;
    password:string
}

export interface UserLoginDto{
    username: string
    password: string
}


export interface UserDto{
    id: number
    name: string
    email: string
}

export interface UserLogInSuccessDto{
    login: boolean
    user: UserDto
    
}