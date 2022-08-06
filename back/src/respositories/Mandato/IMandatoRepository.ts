
import { Mandato } from "../../database/modelos/Mandato";


export default interface IMandatoRespository{


    create(mandato: Mandato) : Promise<Mandato>;
    getAll(): Promise<Mandato[]>;
    getById(idprofessor: number): Promise<Mandato[]>;
   
}