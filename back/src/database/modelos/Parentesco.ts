import { Entity,ManyToOne,JoinColumn, Column, CreateDateColumn, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./Pessoa";


@Entity("parentesco") // faz o relacionamento com as tabelas dos banco de dados
export class Parentesco{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    id_professor1:number;

    @Column()
    id_professor2:number;

    @Column()
    tipo:number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "id_professor1" })
    user: User;

}