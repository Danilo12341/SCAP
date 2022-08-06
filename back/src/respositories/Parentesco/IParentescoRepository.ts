
import { Parentesco } from "../../database/modelos/Parentesco";


export default interface IParentescoRespository{


    create(parentesco: Parentesco) : Promise<Parentesco>;
    getAll(): Promise<Parentesco[]>;
   //getById(idprofessor: number): Promise<Afastamento[]>;
    
   
}