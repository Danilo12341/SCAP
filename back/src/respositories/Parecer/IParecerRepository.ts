
import { Afastamento } from "../../database/entities/Afastamento";
import { Parecer } from "../../database/entities/Parecer";


export default interface IParecerRespository{


    create(parecer: Parecer) : Promise<Parecer>;
    getAll(): Promise<Parecer[]>;
    getById(idprofessor: number): Promise<Parecer[]>;
    
   
}