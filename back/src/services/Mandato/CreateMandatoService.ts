import { getRepository, Repository } from "typeorm";
import { MandatoRespository } from "../../respositories/Mandato/MandatoRepository";
import { Mandato} from '../../database/entities/Mandato';



type MandatoRequest = {
    datainicio:Date;
    datafim:Date;
    chefe: boolean;
    professor_id: number;
}
export class CreateMandatoService{
   /*
    async execute({datainicio,datafim,chefe,professor_id}:MandatoRequest):Promise<Mandato | Error> {

        const repo = getRepository(Mandato);

        const mandato = repo.create({
            datainicio,
            datafim,
            chefe,
            professor_id
        })

        await repo.save(mandato);
        return mandato;

    }*/

    async execute(mandato: Mandato): Promise<Mandato> {

        const mandatoRespository = new MandatoRespository();

        const mandatoSaved = await  mandatoRespository.create(mandato);

        return  mandatoSaved;
    }
    
}