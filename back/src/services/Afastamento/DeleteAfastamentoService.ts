import { AfastamentoRespository } from "../../respositories/Afastamento/AfastamentoRepository";


export class DeleteAfastamentoService{
  

    async execute(id: number): Promise<void>  {

        const afastamentoRespository = new AfastamentoRespository();

        const afastamentoSaved = await  afastamentoRespository.deletefastamento(id);

        return afastamentoSaved;

      
    }
    
}