import { getRepository, Repository } from "typeorm";
import IDocumentoRespository from "./IDocumentoRepository"
import { Documento } from "../../database/entities/Documento";


export class DocumentoRespository implements IDocumentoRespository{

    private repo: Repository<Documento>;

    constructor(){
        this.repo = getRepository(Documento);
    }

    public async create(documento: Documento) : Promise<Documento> {

        const documentoCreated = await this.repo.create(documento);
        const documentoSaved = await this.repo.save(documentoCreated);
        return documentoSaved;
    }
   
    public async  getAll(): Promise<Documento[]> {

        return await this.repo.find();
    }
    
      /*
    public  async getById(idprofessor: number): Promise<Parecer[]>{

        var valor : number = idprofessor;
        console.log(valor + "aquii")
        const parecer  =  await getRepository(Parecer)
        .createQueryBuilder("parecer")
        .where('parecer.id_professor = :id_professor ', { id_professor:valor })
        .getMany();

        console.log(parecer)
        return parecer;

    } */
   
}
