import { ParecerRespository } from "../../respositories/Parecer/ParecerRepository";
import { Parecer } from "../../database/modelos/Parecer";



export class CreateParecerService{
  
    async execute(parecer: Parecer): Promise<Parecer> {

        const parecerRespository = new ParecerRespository();

        const parecerSaved = await  parecerRespository.create(parecer);

        return  parecerSaved;
    }
    
}