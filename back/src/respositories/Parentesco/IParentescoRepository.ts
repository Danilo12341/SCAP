
import { Parentesco } from "../../database/entities/Parentesco";


export default interface IParentescoRespository{


    create(parentesco: Parentesco) : Promise<Parentesco>;
    getAll(): Promise<Parentesco[]>;
   //getById(idprofessor: number): Promise<Afastamento[]>;
    
   
}