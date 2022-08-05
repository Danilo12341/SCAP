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
    public async getOneById(idafastamento): Promise<Afastamento> {

        const repo = getRepository(Afastamento);

         const afastamento = await repo.createQueryBuilder("afastamento")
        .where('afastamento.id = :id', { id: idafastamento })
        .getOne()

        return afastamento;
    }

    public async updateAfastamento(id: number, situacao: number): Promise<Afastamento | Error> {
        const repo = getRepository(Afastamento);

        const afastamento = await repo.findOne(id);

        if(!afastamento) {
            return new Error("Error! Não foi possível apagar!");
        }

        afastamento.situacao = situacao ? situacao : afastamento.situacao;

        await repo.save(afastamento);

        return afastamento

    }

      

}
