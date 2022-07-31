import { Response,Request } from "express"
import { CreateDocumentoService } from "../services/Documento/CreateDocumentoService";
import { GetAllDocumentoService } from "../services/Documento/GetAllDocumentoService";


export class DocumentoController{
    async create(request:Request,response:Response){

        const documento = request.body
        const service = new CreateDocumentoService;
        const result = await service.execute(documento);

        if( result instanceof Error ){
            return response.status(400).json(result.message)
        }
        return response.json(result);

    }

    async GetAll(request:Request,response:Response){
        const service = new  GetAllDocumentoService;
        const result = await service.execute();

        return response.json(result);

    }
   /*
    async getById(request: Request, response: Response) {

            const {id} = request.params;
            const getParecerByIdService = new GetByIdParecerService()
            const parecer = await getParecerByIdService.execute(
               +id);
            return response.json(parecer);
                     
    }*/
    
}


