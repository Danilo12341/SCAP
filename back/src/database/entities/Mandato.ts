import { Entity,ManyToOne,JoinColumn, Column, CreateDateColumn, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./Pessoa";


@Entity("mandato") // faz o relacionamento com as tabelas dos banco de dados
export class Mandato{
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    datainicio:Date;

    @CreateDateColumn()
    datafim:Date;

    @Column('boolean')
    chefe: boolean;

    @Column()
    professor_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "professor_id" })
    user: User;

}