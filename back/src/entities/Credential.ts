import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity({name:"credentials"})
export class Credential{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 100, unique: true, nullable: false})
    username: string;

    @Column({type:"varchar",length: 255, select:false, nullable: false})
    password: string

    @OneToOne(()=> User)
    user: User
    
    @CreateDateColumn()
    createAt?: Date

    @UpdateDateColumn()
    updateAt?: Date
}
