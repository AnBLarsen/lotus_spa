import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Appointment } from "./Appointment"
import { Credential } from "./Credential"

@Entity({name:"users"})
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 100, nullable: false})
    name: string

    @Column({type: "varchar", length: 100, unique: true, nullable:false})
    email: string

    @Column({type:"date", nullable:false})
    birthdate: Date

    @Column({type:"integer", unique: true, nullable:false})
    nDni: number
    
    @OneToOne(() => Credential, { cascade: true })
    @JoinColumn()
    credential: Credential
    
    @OneToMany(() => Appointment, (appointment) => appointment.user, {onDelete: "CASCADE"})
    appointments: Appointment[];
   
    @CreateDateColumn()
    createAt?: Date
    
    @UpdateDateColumn()
    updateAt?: Date
}







