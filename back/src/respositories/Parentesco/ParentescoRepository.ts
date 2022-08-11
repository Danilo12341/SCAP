import { getRepository, Repository } from "typeorm";
import {Parentesco} from "../../database/modelos/Parentesco";
import IParentescoRespository from "./IParentescoRepository";




export class ParentescoRespository implements IParentescoRespository{

    private repo: Repository<Parentesco>;

    constructor(){
        this.repo = getRepository(Parentesco);
    }

    public async create(parentesco: Parentesco) : Promise<Parentesco> {

        const parentescoCreated = await this.repo.create(parentesco);
        const parentescotoSaved = await this.repo.save(parentescoCreated);

        return parentescotoSaved;
    }
    public async getAll(): Promise<Parentesco[]> {
        return await this.repo.find({
            relations:['user']
        });   
    }

    public async getById(idprofessor: number): Promise<Parentesco[]>{
   
        const parentescos = await getRepository(Parentesco)
        .createQueryBuilder('parentesco')
        .innerJoinAndSelect('parentesco.user', 'user')
        .where('Parentesco.id_professor1 = :professor_id', {professor_id:idprofessor} )
        .getMany();

        return parentescos;
       
    }

  
}
