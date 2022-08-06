
import { Afastamento } from "../../database/modelos/Afastamento";
import { Parecer } from "../../database/modelos/Parecer";


export default interface IParecerRespository{


    create(parecer: Parecer) : Promise<Parecer>;
    getAll(): Promise<Parecer[]>;
    getById(idprofessor: number): Promise<Parecer[]>;
    
   
}