import { Entity,ManyToOne,JoinColumn, Column, CreateDateColumn, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./Pessoa";


@Entity("parecer") // faz o relacionamento com as tabelas dos banco de dados
export class Parecer{
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    data_parecer:Date;

    @Column()
    motivo:string;

    @Column()
    id_professor: number;

    @Column()
    id_afastamento: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "id_professor" })
    user: User;

}