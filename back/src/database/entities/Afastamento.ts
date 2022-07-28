import { Entity,ManyToOne,JoinColumn, Column, CreateDateColumn, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./Pessoa";


@Entity("afastamento") // faz o relacionamento com as tabelas dos banco de dados
export class Afastamento{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome_evento: string;

    @CreateDateColumn()
    data_inicio_afastamento: Date;

    @CreateDateColumn()
    data_final_afastamento: Date;

    @CreateDateColumn()
    data_inicio_evento: Date;

    @CreateDateColumn()
    data_fim_evento: Date;

    @Column()
    situacao: number;

    @Column()
    tipoAfastamento: number;

    @Column()
    onus: number;
    
    @Column()
    motivo: string;

    @Column()
    id_professor:number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "id_professor" })
    user: User;


}