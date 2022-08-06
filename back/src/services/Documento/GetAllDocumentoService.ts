import { Documento } from "../../database/modelos/Documento";
import { DocumentoRespository } from "../../respositories/Documento/DocumentoRepository";

export class GetAllDocumentoService{

    async execute(): Promise<Documento[]> {

        const documentoRespository = new DocumentoRespository();
        const documento = await documentoRespository.getAll();

        return documento;


    }
    
}