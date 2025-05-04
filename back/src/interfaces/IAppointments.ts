export enum Status{
    ACTIVE = "active",
    CANCELLED = "cancelled"
}

interface IAppointments{
    id: number;
    date: Date;
    time: string;
    userId: number;
    status: Status;
    description: string
}


export default  IAppointments