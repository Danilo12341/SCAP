import { Parecer } from "../../database/modelos/Parecer";
import { ParecerRespository } from "../../respositories/Parecer/ParecerRepository";


export class GetAllPareceService{

    async execute(): Promise<Parecer[]> {

        const parecerRespository = new ParecerRespository();
        const parecer = await parecerRespository.getAll();

        return parecer;


    }
    
}