import { getRepository, Repository } from "typeorm";
import { Mandato} from '../../database/modelos/Mandato';

export class GetByIdMandatoService{


    async execute(idprofessor: number): Promise<Mandato[]> {

        const repo = getRepository(Mandato);
        var valor : number = idprofessor;
        console.log(valor + "aquii")
        const mandatos  =  await getRepository(Mandato)
        .createQueryBuilder("mandato")
        .where('Mandato.professor_id = :professor_id ', { professor_id:valor })
        .getMany();

        console.log(mandatos)
        return mandatos

    }
    
}