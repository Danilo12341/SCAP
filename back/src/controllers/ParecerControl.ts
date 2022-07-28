import { Response,Request } from "express"
import { CreateParecerService } from "../services/Parecer/CreateParecerService";
import { GetAllPareceService } from "../services/Parecer/GetAllParecerService";
import { GetByIdParecerService } from "../services/Parecer/GetByIdParecerService";


export class createParecerController{
    async create(request:Request,response:Response){

        const parecer = request.body

        const service = new CreateParecerService();

        const result = await service.execute(parecer);

        if( result instanceof Error ){
            return response.status(400).json(result.message)
        }

        return response.json(result);

    }

    async GetAll(request:Request,response:Response){
        const service = new  GetAllPareceService();
        const result = await service.execute();

        return response.json(result);

    }


    async getById(request: Request, response: Response) {

            const {id} = request.params;

            const getParecerByIdService = new GetByIdParecerService()
            const parecer = await getParecerByIdService.execute(
               +id);
            return response.json(parecer);
             
            
            
    }
    
    

}


