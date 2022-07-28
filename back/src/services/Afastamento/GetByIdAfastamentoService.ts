import { getRepository, Repository } from "typeorm";
import { Afastamento } from "../../database/entities/Afastamento";
import { AfastamentoRespository } from "../../respositories/Afastamento/AfastamentoRepository";

export class GetByIdMandatoService{

    async execute(idprofessor: number): Promise<Afastamento[]> {

     const afastamentoRespository = new AfastamentoRespository;
     const afastamento = await afastamentoRespository.getById(idprofessor);
    
         return afastamento;
    }
  
}