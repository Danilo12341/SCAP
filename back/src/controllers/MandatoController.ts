import { Response,Request } from "express"
import { GetAllMandatoService } from "../services/Mandato/GetAllMandatoService";
import { CreateMandatoService } from "../services/Mandato/CreateMandatoService";
import {GetByIdMandatoService}  from "../services/Mandato/GetByIdMandatoService"




export class createMandatoController{
    async create(request:Request,response:Response){

        const mandato  = request.body

        const service = new  CreateMandatoService();

        const result = await service.execute(mandato);

        if( result instanceof Error ){
            return response.status(400).json(result.message)
        }

        return response.json(result);



    }
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
    

}


