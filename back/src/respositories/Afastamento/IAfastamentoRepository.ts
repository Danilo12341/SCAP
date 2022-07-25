
import { Afastamento } from "../../database/entities/Afastamento";


export default interface IAfastamentoRespository{


    create(afastamento: Afastamento) : Promise<Afastamento>;
    
   
}