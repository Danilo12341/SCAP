import { getRepository, Repository } from "typeorm";
import { MandatoRespository } from "../../respositories/Mandato/MandatoRepository";
import { Mandato} from '../../database/entities/Mandato';
import { ParentescoRespository } from "../../respositories/Parentesco/ParentescoRepository";
import { Parentesco } from "../../database/entities/Parentesco";


export class CreateParentescoService{
  

    async execute(parentesco: Parentesco): Promise<Parentesco> {

        const parentescoRespository = new ParentescoRespository();

        const parentescoSaved = await  parentescoRespository.create(parentesco);

        return parentescoSaved;
    }
    
}