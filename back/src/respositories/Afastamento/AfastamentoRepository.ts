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

    public async  getAll(): Promise<Afastamento[]> {

        return await this.repo.find({
            relations:['user']
        });
      }

    public  async getById(idprofessor: number): Promise<Afastamento[]>{

        var valor : number = idprofessor;
        console.log(valor + "aquii")
        const afastamento  =  await getRepository(Afastamento)
        .createQueryBuilder("afastamento")
        .where('afastamento.id_professor = :id_professor ', { id_professor:valor })
        .getMany();

        console.log(afastamento)
        return afastamento 

    }

}
