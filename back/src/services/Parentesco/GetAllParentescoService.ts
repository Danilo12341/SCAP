import { Parentesco } from "../../database/modelos/Parentesco";
import { ParentescoRespository } from "../../respositories/Parentesco/ParentescoRepository";


export class GetAllParentescoService{

    async execute(): Promise<Parentesco[]> {

        const parentescoRespository = new ParentescoRespository();
        const parentesco = await parentescoRespository.getAll();

        return parentesco


    }
    
}