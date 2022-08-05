import { AfastamentoRespository } from "../../respositories/Afastamento/AfastamentoRepository";
import {Afastamento} from "../../database/entities/Afastamento"


export class CreateAfastamentoService{
  

    async execute(afastamento: Afastamento): Promise<Afastamento> {

        const afastamentoRespository = new AfastamentoRespository();

        const afastamentoSaved = await  afastamentoRespository.create(afastamento);

        return afastamentoSaved;
    }
    
}