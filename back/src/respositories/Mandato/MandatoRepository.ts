import { getRepository, Repository } from "typeorm";
import { Mandato } from "../../database/entities/Mandato";
import IMandatoRespository from "./IMandatoRepository";


export class MandatoRespository implements IMandatoRespository{

    private repo: Repository<Mandato>;

    constructor(){
        this.repo = getRepository(Mandato);
    }

    public async create(mandato: Mandato) : Promise<Mandato> {

        const mandatoCreated = await this.repo.create(mandato);
        const mandatoSaved = await this.repo.save(mandatoCreated);

        return mandatoSaved;
    }

    public async getAll() : Promise<Mandato[]> {

        return await this.repo.find({
            relations:['user']
        });

    }
    public async getById(idprofessor: number): Promise<Mandato[]>{
 
        
        const mandatos = await getRepository(Mandato)
        .createQueryBuilder('Mandato')
        .select("mandato.chafe")
        .where('Mandato.professor_id = :professor_id', {idprofessor} )
        .getMany();

        return mandatos
       

    }
}
