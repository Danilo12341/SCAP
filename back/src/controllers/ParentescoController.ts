import { Response,Request } from "express"
import { CreateParentescoService } from "../services/Parentesco/CreateParentescoService";
import { GetByIdParentescoService } from "../services/Parentesco/GetAllParentescoByIdService";
import { GetAllParentescoService } from "../services/Parentesco/GetAllParentescoService";


export class ParentescoController{
    async create(request:Request,response:Response){

        const parentesco = request.body

        const service = new CreateParentescoService();

        const result = await service.execute(parentesco);

        if( result instanceof Error ){
            return response.status(400).json(result.message)
        }

        return response.json(result);



    }

    async GetAll(request:Request,response:Response){
        const service = new  GetAllParentescoService();
        const result = await service.execute();

        return response.json(result);

    }

    
    async getById(request: Request, response: Response) {

            const {id} = request.params;

            const getByIdParentescoService = new GetByIdParentescoService()
            const parentesco = await getByIdParentescoService.execute(+id
            );
            return response.json(parentesco);
                  
    }
    
}


