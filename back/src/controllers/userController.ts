import { Request, Response } from "express"
import { getUserByIdService, getUsersService, loginService, registerService } from "../services/userService";
import { PostgresError } from "../interfaces/ErrorInterface";
import { UserLogInSuccessDto } from "../dto/UserDto";




export const getUsersController = async(req:Request, res:Response ):Promise<void> => {
    try {
        const response = await getUsersService();
        res.status(200).json({
            message: "List of all users",
            data: response
        });    
    } catch (error) {
        res.status(400).json({
            message: "Server error",
            data: error instanceof Error ? error.message: "Unknown error"
        });
    }
}

export const getUserByIdController = async(req:Request, res:Response ): Promise<void>=>{
    const {id} = req.params;
    try {
        const response =  await getUserByIdService(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({
            message: "Usuario no existe",
            data: error instanceof Error ? error.message: "Unknown error"
        });
    }
}

export const registerController = async (req: Request, res: Response): Promise<void> => {
    try {
        await registerService(req.body);
        res.status(201).json({
            message: "Usuario registrado con éxito",
        });
    } catch (error) {
        const postgresError = error as PostgresError;

        res.status(400).json({
            message: postgresError.detail || "Unknown database error",
        });
    }
};

export const loginController = async (req:Request, res:Response ):Promise<void> => {
    try {
        const response: UserLogInSuccessDto | null = await loginService(req.body);
        res.status(200).json(response);
    } catch (error) {
        const postgresError = error as PostgresError;
        res.status(400).json({
            message: postgresError.detail || "Unknown database error",
        });   
    }
};


