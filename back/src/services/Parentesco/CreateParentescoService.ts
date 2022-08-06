import { ParentescoRespository } from "../../respositories/Parentesco/ParentescoRepository";
import { Parentesco } from "../../database/modelos/Parentesco";


export class CreateParentescoService{
  

    async execute(parentesco: Parentesco): Promise<Parentesco> {

        const parentescoRespository = new ParentescoRespository();

        const parentescoSaved = await  parentescoRespository.create(parentesco);

        return parentescoSaved;
    }
    
    
}