import { Request, Response } from "express"
import { cancelAppointmentService, getAppointmentsByIdService, getAppointmentsService, scheduleService } from "../services/appointmentService"
import { AppointmentRegisterDto } from "../dto/AppointmentDto";
import { PostgresError } from "../interfaces/ErrorInterface";


export const getAppointmentsController = async(req:Request, res:Response ):Promise<void> =>{
    try {
        const response= await getAppointmentsService();
        res.status(200).json({
            message: "Appointments List",
            data: response
        });
        
    } catch (error) {
        res.status(404).json({
            message: "Server error",
            data: error instanceof Error ? error.message : "Unkown Error"
        });
    }
}



export const getAppointmentsByIdController = async(req:Request, res:Response ):Promise<void> => {
    const {id} = req.params;
    try {
        const response=  await getAppointmentsByIdService(id);
        res.status(200).json({
            message: "Appointment by Id" + id,
            data: response
        });
        
    } catch (error) {
        res.status(400).json({
            message: "Server error",
            data: error instanceof Error ? error.message : "Unkown Error"
        });
    }
}


export const scheduleAppointmentController = async(req:Request<unknown,unknown, AppointmentRegisterDto>, res:Response ):Promise<void> => {
    try {
        
        const response=  await scheduleService(req.body);
        res.status(201).json({
            message:"New Appointment Has Been Created",
            data: response
        })
            
    } catch (error) {
        const postgresError = error as PostgresError;

        res.status(400).json({
            message: postgresError.detail || "Unknown database error",
            data: error instanceof Error ? error.message: "Unknown error"
        })   
    }
}



export const cancelAppointmentController = async(req:Request, res:Response ):Promise<void> => {
    const {id} = req.params;
    try {
        const response= await cancelAppointmentService(id);
        res.status(200).json({
            message: "Update the appointment status to 'cancelled':" + id,
            data: response
        });
        
    } catch (error) {
        res.status(404).json({
            message: "Server error",
            data: error instanceof Error ? error.message : "Unkown Error"
        });
    }

}
