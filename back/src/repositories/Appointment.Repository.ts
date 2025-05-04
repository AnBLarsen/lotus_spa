
import { AppDataSource } from "../config/ data-source";
import { Appointment } from "../entities/Appointment";
import { isBefore, subHours, differenceInHours, getDay } from "date-fns";

export const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({

    appointmentDateValidation: function(date: Date, time: string): void {
       
        const appointmentDate = new Date(date);
        const [hours, minutes] = time.split(":").map(Number);
        appointmentDate.setHours(hours, minutes, 0, 0);

        const dayOfWeek = getDay(appointmentDate);
        if (dayOfWeek === 5|| dayOfWeek === 6) {
            throw new Error("Appointments cannot be scheduled on weekends.");
        }

        if (hours < 9 || hours >= 17) {
            throw new Error("Appointments can only be scheduled between 9:00 AM and 5:00 PM.");
        }
       
        const appointmentDateCan = subHours(appointmentDate, 4);
        const dateNowCan = subHours(new Date(), 4);

        if (isBefore(appointmentDateCan, dateNowCan)) {
            throw new Error("Appointments cannot be scheduled for past dates.");
        }

        
        const diffHrs = differenceInHours(appointmentDate, new Date());
        if (diffHrs < 24) {
            throw new Error("Appointments should be scheduled at least 24 hours ahead of time.");
        }

    },

    existingAppointmentValidation : async function  (userId: number, date: Date, time: string): Promise<void>{
        const appointmentFound = await this.findOne({
            where:{
                user:{
                    id: userId
                },
                date: date,
                time:time
            }
        })
        if(appointmentFound) throw new Error (`Appointment for ${userId} at ${time} on the ${date} alredy exists`)
    }
});




