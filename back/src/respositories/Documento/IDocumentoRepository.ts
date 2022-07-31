
import { Documento } from "../../database/entities/Documento";


export default interface IDocumentoRespository{


    create(documento: Documento) : Promise<Documento>;
    getAll(): Promise<Documento[]>;
   // getById(idprofessor: number): Promise<Parecer[]>;
    
   
}