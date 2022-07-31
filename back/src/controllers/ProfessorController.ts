import { Request, Response } from "express";
import { GetByIdProfessorService} from "../services/Professor/GetByIdProfessorService";
import { DeletePessoaService } from '../services/Professor/DeleteStudentService';

export class ProfessorController{
    async findAll(request: Request, response: Response) {
        try {
            const { page, limit } = request.query;

            const getPage = page || 1;
            const getLimit = limit || 10;

            const findAllStudentsService = new GetByIdProfessorService();
            const students = await findAllStudentsService.execute({
                page: +getPage,
                limit: +getLimit
            });

            return response.status(200).json(students);
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }
    async findAllprofessor(request: Request, response: Response) {
        try {
         

            const findAllStudentsService = new GetByIdProfessorService();
            const students = await findAllStudentsService.execute2()

            return response.status(200).json(students);
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }

    public async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const deleteStudentService = new DeletePessoaService();
            await deleteStudentService.execute(+id);

            return response.status(200).send();
        } catch (err) {
            return response.status(err.statusCode || 500).json({ message: err.message, title: err.title });
        }
    }
    async findAllId(request: Request, response: Response) {
        try {
            
            const { id } = request.params;
          

            const findAllStudentsService = new GetByIdProfessorService();
            const students = await findAllStudentsService.execute3(+id)
              

            return response.status(200).json(students);
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }
}