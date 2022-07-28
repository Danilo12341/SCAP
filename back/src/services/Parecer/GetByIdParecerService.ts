import { Parecer } from "../../database/entities/Parecer";
import { ParecerRespository } from "../../respositories/Parecer/ParecerRepository";

export class GetByIdParecerService{


    async execute(idprofessor: number): Promise<Parecer[]> {

        const parecerRespository = new ParecerRespository();
        const parecer = await parecerRespository.getById(idprofessor);
       
        return parecer;

       
    }
    
}