import { getRepository, Repository } from "typeorm";
import { Afastamento } from "../../database/modelos/Afastamento";
import { AfastamentoRespository } from "../../respositories/Afastamento/AfastamentoRepository";


export class GetAllAfastamentoService{

    async execute(): Promise<Afastamento[]> {

        const afastamentoRespository = new AfastamentoRespository();
        const afastamento = await afastamentoRespository.getAll();

        return afastamento ;


    }
   
    
}