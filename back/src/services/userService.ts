import { AppDataSource, UserModel } from "../config/ data-source";
import { UserDto, UserLoginDto, UserLogInSuccessDto, UserRegisterDto } from "../dto/UserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { createCredentialService, validateCredentialService } from "./credentialsService";


export const getUsersService = async(): Promise<UserDto[]> => {
   const users: User[] = await UserModel.find()
   return users
}

export const getUserByIdService = async (id: string): Promise<UserDto> => {
    const numericId = Number(id);
    if (isNaN(numericId)) {
        throw new Error(`Invalid ID: ${id}`);
    }

    const userFound = await UserModel.findOne({
        where: { id: numericId },
        relations: ["appointments"]
    });

    if (!userFound) throw new Error(`User with id ${id} not found`);

    return userFound;
};

export const registerService = async(user:UserRegisterDto):Promise<User> =>{

    const result = AppDataSource.transaction(async (entityManager)=>{
        const userCredentials: Credential = await createCredentialService(entityManager, user.username, user.password)
        
        const newUser: User = entityManager.create(User, {
            name: user.name,
            email:user.email,
            birthdate: user.birthdate,
            nDni: user.nDni,
            credential: userCredentials
        })
        return await entityManager.save(newUser)
    })
    return result
}


export const loginService = async (user: UserLoginDto): Promise<UserLogInSuccessDto> => {

    const credentialId: number | undefined = await validateCredentialService(user.username, user.password);

    if (!credentialId) {
        throw new Error("Invalid username or password");
    }


    const userFound: User | null = await UserModel.findOne({
        where: {
            credential: { id: credentialId },
        },
        relations: ["credential"],  
    });

    if (!userFound) {
        throw new Error("User not found");
    }

    return {
        login: true,
        user: {
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            birthdate: userFound.birthdate,
            nDni: userFound.nDni,
        },
    };
    
}

  

