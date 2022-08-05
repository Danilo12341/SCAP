import { Response,Request } from "express"
import { CreateAfastamentoService } from "../services/Afastamento/CreateAfastamentoService";
import { GetAllAfastamentoService } from "../services/Afastamento/GetAllAfastamentoService";
import { GetByIdMandatoService } from "../services/Afastamento/GetByIdAfastamentoService";
import { UpdateAfastamentoService } from "../services/Afastamento/UpdateAfastamentoService";


export class AfastamentoController{
    async create(request:Request,response:Response){

        const afastamento = request.body

        const service = new CreateAfastamentoService();

        const result = await service.execute(afastamento);

        if( result instanceof Error ){
            return response.status(400).json(result.message)
        }

        return response.json(result);



    }

    
    async GetAll(request:Request,response:Response){
        const service = new  GetAllAfastamentoService();
        const result = await service.execute();

        return response.json(result);

    }
    
    async getById(request: Request, response: Response) {

            const {id} = request.params;

            const getAfastamentoByIdService = new GetByIdMandatoService();
            const afastamento = await getAfastamentoByIdService.execute(
               +id
            );
            return response.json(afastamento);
             
            
            
    }

    async onegetById(request: Request, response: Response) {

        const {id} = request.params;

        const getAfastamentoByIdService = new GetByIdMandatoService();
        const afastamento = await getAfastamentoByIdService.execute2(
           +id
        );
        return response.json(afastamento);            
    }

    async updateAfastamento(request: Request, response: Response) {

        const {id} = request.params;
        const {situacao} = request.body;

        const updateAfastamentoService = new UpdateAfastamentoService()
        const afastamento = await updateAfastamentoService.execute(+id,situacao)
        return response.json(afastamento);            
    }
    
    
    

}


