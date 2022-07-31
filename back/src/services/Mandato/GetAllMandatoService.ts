import { getRepository, Repository } from "typeorm";
import { Mandato} from '../../database/entities/Mandato';
import { MandatoRespository } from "../../respositories/Mandato/MandatoRepository";


export class GetAllMandatoService{



    async execute(): Promise<Mandato[]> {

        const mandatoRespository = new MandatoRespository();
        const mandatos = await mandatoRespository.getAll();

        return mandatos


    }
    
}