import { Documento } from "../../database/modelos/Documento";
import { DocumentoRespository } from "../../respositories/Documento/DocumentoRepository";



export class CreateDocumentoService{
  
    async execute(documento: Documento): Promise<Documento> {

        const documentoRespository = new DocumentoRespository;

        const documentoSaved = await  documentoRespository.create(documento);

        return  documentoSaved;
    }
    
}