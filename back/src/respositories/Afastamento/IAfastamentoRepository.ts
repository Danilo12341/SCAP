
import { Afastamento } from "../../database/modelos/Afastamento";


export default interface IAfastamentoRespository{


    create(afastamento: Afastamento) : Promise<Afastamento>;
    getAll(): Promise<Afastamento[]>;
    getById(idprofessor: number): Promise<Afastamento[]>;
    getOneById(idafastamento: number): Promise<Afastamento>;
    updateAfastamento(id: number,afast: Afastamento): Promise<Afastamento | Error>;
    deletefastamento(id: number): Promise<void>;
    
    
   
}