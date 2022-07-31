import { getRepository, Repository } from "typeorm";
import {Parentesco} from "../../database/entities/Parentesco";
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

  
}
