import { Entity, Column, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Student } from "./Professor";

@Entity("pessoa")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    password: string;

    @Column('boolean')
    admin: boolean;

    @OneToOne(type => Student, user => User)
    student: Student;
}