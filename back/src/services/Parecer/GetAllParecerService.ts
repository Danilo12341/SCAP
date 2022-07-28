import { Parecer } from "../../database/entities/Parecer";
import { ParecerRespository } from "../../respositories/Parecer/ParecerRepository";


export class GetAllPareceService{

    async execute(): Promise<Parecer[]> {

        const parecerRespository = new ParecerRespository();
        const parecer = await parecerRespository.getAll();

        return parecer;


    }
    
}