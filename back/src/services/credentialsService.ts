import { Credential } from "../entities/Credential";
import bcrypt from "bcrypt";
import { EntityManager } from "typeorm";
import { CredentialModel } from "../config/ data-source";

const credentialList:Credential[] = [];

const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};


export const createCredentialService:(entityManager: EntityManager, a: string, b: string)=> Promise<Credential> = async (entityManager:EntityManager, username:string, password:string): Promise<Credential> =>{

    const passwordEncripted: string = await hashPassword(password);

    const credentials:Credential = entityManager.create(Credential, {
        username,
        password: passwordEncripted
    })

    return await entityManager.save(credentials)
    
};

export const validateCredentialService = async (username: string, password: string): Promise<number | undefined> => {
    const usernameFound: Credential | null = await CredentialModel.findOne({
      where: { username },
      select: ['id', 'password'] 
    });
  
    if (!usernameFound) throw new Error(`User ${username} does not exist`);
    
    const passwordValidation = await bcrypt.compare(password, usernameFound.password);
  
    if (!passwordValidation) throw new Error("Invalid username or password");
    
  
    return usernameFound.id; 
};


  



