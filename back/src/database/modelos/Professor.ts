import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Afastamento } from "./Afastamento";
import { User } from './Pessoa';

@Entity("professor")
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    telephone: string;


    @Column('int4', { name: 'user_id' })
    userId: number;

    @OneToOne(type => User, student => Student, { cascade: true, eager: true })
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(type => Afastamento, afastamento => Afastamento)
    afastamentos: Afastamento[];


}