import { getRepository, Repository } from "typeorm";
import IAfastamentoRespository from "./IAfastamentoRepository";
import { Afastamento } from "../../database/modelos/Afastamento";
import AppError from '../../shared/errors/AppError';



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
        const afastamento  =  await getRepository(Afastamento)
        .createQueryBuilder("afastamento")
        .innerJoinAndSelect('afastamento.user', 'user')
        .where('afastamento.id_professor = :id_professor ', { id_professor:valor })
        .getMany();

        return afastamento 

    }
    public async getOneById(idafastamento): Promise<Afastamento> {

        const repo = getRepository(Afastamento);

         const afastamento = await repo.createQueryBuilder("afastamento")
        .where('afastamento.id = :id', { id: idafastamento })
        .getOne()

        return afastamento;
    }

    public async updateAfastamento(id: number, afast: Afastamento): Promise<Afastamento | Error> {
        const repo = getRepository(Afastamento);

        const afastamento = await repo.findOne(id);

        if(!afastamento) {
            return new Error("Error! Não foi possível apagar!");
        }

        afastamento.situacao = afast.situacao ? afast.situacao: afastamento.situacao;
        afastamento.data_inicio_afastamento = afast.data_inicio_afastamento ? afast.data_inicio_afastamento: afastamento.data_inicio_afastamento;
        afastamento.data_final_afastamento = afast.data_final_afastamento ? afast.data_final_afastamento : afastamento.data_final_afastamento;
        afastamento.data_inicio_evento = afast.data_inicio_evento ? afast.data_inicio_evento : afastamento.data_inicio_evento;
        afastamento.data_fim_evento = afast.data_fim_evento ? afast.data_fim_evento :afastamento.data_fim_evento;
        afastamento.motivo = afast.motivo ?  afast.motivo : afastamento.motivo;
        afastamento.nome_evento = afast.nome_evento ? afast.nome_evento : afastamento.nome_evento;
        afastamento.onus = afast.onus ? afast.onus : afastamento.onus;
        afastamento.tipoAfastamento=afast.tipoAfastamento  ? afast.tipoAfastamento : afastamento.tipoAfastamento;
        
        await repo.save(afastamento);

        return afastamento

    }
    public async deletefastamento(id: number): Promise<void>{

        const repo = getRepository(Afastamento);

        const student = await repo.findOne(id);

        if(!student) {
            throw new AppError({message: "Apastamento não encontrado!", statusCode: 400, title: "Error! Não foi possível apagar!"});
        }
        await repo.delete(id);

        return ;
    }

      

}
