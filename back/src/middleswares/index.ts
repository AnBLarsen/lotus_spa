import { Request, Response, NextFunction } from "express";

export const validateUserRegistration= (req: Request, res: Response, next: NextFunction):void=> {
    
    const inputFields: string[] = ["birthdate", "email", "nDni", "name", "password", "username"]

    const filteredInputs: string[] = inputFields.filter(inputs => !req.body[inputs])

    if (filteredInputs.length > 0){
        res.status(400).json({
            message: `Missing  ${filteredInputs.join(", ")} to register the user`
        })
    } else next()    
}

export const validateAppointmentRegistration = (req: Request, res: Response, next: NextFunction):void => {

    const inputFields: string[] = ["date", "time", "userId", "description"]

    const filteredInputs: string[] = inputFields.filter(inputs => !req.body[inputs])

    if (filteredInputs.length > 0){
        res.status(400).json({
            message: `Missing  ${filteredInputs.join(", ")} to schedule an appointment`
        })
    } else next()    

}