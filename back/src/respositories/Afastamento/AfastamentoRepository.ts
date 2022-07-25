import { getRepository, Repository } from "typeorm";
import IAfastamentoRespository from "./IAfastamentoRepository";
import { Afastamento } from "../../database/entities/Afastamento";


export class AfastamentoRespository implements IAfastamentoRespository{

    private repo: Repository<Afastamento>;

    constructor(){
        this.repo = getRepository(Afastamento);
    }

    public async create(afastamento: Afastamento) : Promise<Afastamento> {

        const afastamentoCreated = await this.repo.create(afastamento);
        const afastamentotoSaved = await this.repo.save(afastamentoCreated);
        return afastamentotoSaved;
    }

}
