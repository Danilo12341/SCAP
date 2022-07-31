import { Entity,ManyToOne,JoinColumn, Column, CreateDateColumn, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./Pessoa";


@Entity("documento") // faz o relacionamento com as tabelas dos banco de dados
export class Documento{
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    data_documento:Date;

    @Column()
    nome_documento: string;

    @Column()
    titulo_documento: string;

     @Column()
    id_afastamento: number;


    //@ManyToOne(() => User)
    //@JoinColumn({ name: "id_professor" })
    //user: User;

}