import { AfastamentoRespository } from "../../respositories/Afastamento/AfastamentoRepository";
import {Afastamento} from "../../database/modelos/Afastamento"

export class UpdateAfastamentoService{
  

    async execute(id: number, situacao: number): Promise<Afastamento | Error>  {

        const afastamentoRespository = new AfastamentoRespository();

        const afastamentoSaved = await  afastamentoRespository.updateAfastamento(id,situacao);

        return afastamentoSaved;
    }
    
}