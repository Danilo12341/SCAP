import { getRepository, Repository } from "typeorm";
import { Afastamento } from "../../database/modelos/Afastamento";
import { AfastamentoRespository } from "../../respositories/Afastamento/AfastamentoRepository";

export class GetByIdMandatoService{

    async execute(idprofessor: number): Promise<Afastamento[]> {

     const afastamentoRespository = new AfastamentoRespository;
     const afastamento = await afastamentoRespository.getById(idprofessor);
    
         return afastamento;
    }

    async execute2(idafastamento: number): Promise<Afastamento> {

        const afastamentoRespository = new AfastamentoRespository;
        const afastamento = await afastamentoRespository.getOneById(idafastamento);
       
        return afastamento;
    }
  
}