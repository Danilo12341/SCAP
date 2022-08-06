import { getRepository, Repository } from "typeorm";
import IParecerRespository from "./IParecerRepository";
import { Parecer } from "../../database/modelos/Parecer";


export class ParecerRespository implements IParecerRespository{

    private repo: Repository<Parecer>;

    constructor(){
        this.repo = getRepository(Parecer);
    }

    public async create(parecer: Parecer) : Promise<Parecer> {

        const parecerCreated = await this.repo.create(parecer);
        const parecertoSaved = await this.repo.save(parecerCreated);
        return parecertoSaved;
    }
   
    public async  getAll(): Promise<Parecer[]> {

        return await this.repo.find({
            relations:['user']
        });
      }
    
    public  async getById(idprofessor: number): Promise<Parecer[]>{

        var valor : number = idprofessor;
        console.log(valor + "aquii")
        const parecer  =  await getRepository(Parecer)
        .createQueryBuilder("parecer")
        .where('parecer.id_professor = :id_professor ', { id_professor:valor })
        .getMany();

        console.log(parecer)
        return parecer;

    }
   
}
