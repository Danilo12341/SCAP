import { getRepository, Repository } from "typeorm";
import { MandatoRespository } from "../../respositories/Mandato/MandatoRepository";
import { Mandato} from '../../database/entities/Mandato';
import { ParentescoRespository } from "../../respositories/Parentesco/ParentescoRepository";
import { Parentesco } from "../../database/entities/Parentesco";
import { AfastamentoRespository } from "../../respositories/Afastamento/AfastamentoRepository";
import {Afastamento} from "../../database/entities/Afastamento"


export class CreateAfastamentoService{
  

    async execute(afastamento: Afastamento): Promise<Afastamento> {

        const afastamentoRespository = new AfastamentoRespository();

        const afastamentoSaved = await  afastamentoRespository.create(afastamento);

        return afastamentoSaved;
    }
    
}