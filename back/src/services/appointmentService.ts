import { AppointmentRegisterDto}  from "../dto/AppointmentDto"
import { Appointment } from "../entities/Appointment";
import { Status } from "../interfaces/IAppointments";
import { AppointmentRepository } from "../repositories/Appointment.Repository";
import { getUserByIdService } from "./userService";





export const scheduleService = async(appointment: AppointmentRegisterDto):Promise<Appointment> =>{
    
    await getUserByIdService(appointment.userId.toString());

    AppointmentRepository.appointmentDateValidation(appointment.date, appointment.time)
    await AppointmentRepository.existingAppointmentValidation(appointment.userId, appointment.date, appointment.time)

    const newAppointment = AppointmentRepository.create({
        date: appointment.date,
        time: appointment.time,
        description: appointment.description,
        user: {id: appointment.userId}
    })
  
    return await AppointmentRepository.save(newAppointment)
   
}

export const getAppointmentsService = async ():Promise<Appointment[]> =>{
    const appointments =  await AppointmentRepository.find();
    if (appointments.length > 0) return appointments
    else throw new Error("Appointment not found")
}

export const getAppointmentsByIdService = async (id:string):Promise<Appointment> =>{

    const appointmentFound = await AppointmentRepository.findOne({
        where:{
            id: parseInt(id,10)
        }
    })
    
    if (!appointmentFound) throw new Error (`Appointment with id ${id} not found`)
    else return appointmentFound
}



export const cancelAppointmentService = async(id:string):Promise<Appointment> => {

    const appointmentFound = await AppointmentRepository.findOne({
        where:{
            id: parseInt(id,10)
        }
    })
    
    if (!appointmentFound) throw new Error (`Appointment with id ${id} not found`)
    appointmentFound.status = Status.CANCELLED;
    return await AppointmentRepository.save(appointmentFound);

}

