import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { Status } from "../interfaces/IAppointments";


@Entity({name:"appointments"})
export class Appointment{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"date", nullable: false})
    date: Date;

    @Column({ type: "varchar", length: 5, nullable: false })
    time: string;

    
    @Column({type:"varchar", length:10, default: Status.ACTIVE, nullable:false})
    status: Status;
    
    @Column({length: 255})
    description: string
    
    @ManyToOne(() => User, (user) => user.appointments, {nullable:false},)
    @JoinColumn()
    user: User;

    @CreateDateColumn()
    createAt?: Date
    
    @UpdateDateColumn()
    updateAt?: Date
 
}
