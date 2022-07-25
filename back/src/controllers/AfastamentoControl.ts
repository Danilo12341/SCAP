import { Response,Request } from "express"
import { CreateAfastamentoService } from "../services/Afastamento/CreateAfastamentoService";


export class createAfastamentoController{
    async create(request:Request,response:Response){

        const afastamento = request.body

        const service = new CreateAfastamentoService();

        const result = await service.execute(afastamento);

        if( result instanceof Error ){
            return response.status(400).json(result.message)
        }

        return response.json(result);



    }

    /*
    async GetAll(request:Request,response:Response){
        const service = new  GetAllMandatoService;
        const result = await service.execute();

        return response.json(result);

    }
    async getById(request: Request, response: Response) {

            const {id} = request.params;

            const getMandatoByIdService = new GetByIdMandatoService();
            const mandato = await getMandatoByIdService.execute(+id
            );

            
            return response.json(mandato);
             
            
            
    }
    */
    

}


