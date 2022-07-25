
import { Mandato } from "../../database/entities/Mandato";


export default interface IMandatoRespository{


    create(mandato: Mandato) : Promise<Mandato>;
    getAll(): Promise<Mandato[]>;
    getById(idprofessor: number): Promise<Mandato[]>;
   
}