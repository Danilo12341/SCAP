import { Parentesco } from "../../database/modelos/Parentesco";
import { ParentescoRespository } from "../../respositories/Parentesco/ParentescoRepository";

export class GetByIdParentescoService{


    async execute(idprofessor: number): Promise<Parentesco[]> {

     const parentescoRespository = new ParentescoRespository;
     const parentesco = await parentescoRespository.getById(idprofessor);
    
         return parentesco ;

    }
    
}