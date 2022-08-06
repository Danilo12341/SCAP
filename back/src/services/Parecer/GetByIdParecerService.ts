import { Parecer } from "../../database/modelos/Parecer";
import { ParecerRespository } from "../../respositories/Parecer/ParecerRepository";

export class GetByIdParecerService{


    async execute(idprofessor: number): Promise<Parecer[]> {

        const parecerRespository = new ParecerRespository();
        const parecer = await parecerRespository.getById(idprofessor);
       
        return parecer;

       
    }
    
}