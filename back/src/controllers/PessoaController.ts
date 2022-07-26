import { Request, Response } from "express";
import { CreatePessoaService } from "../services/Pessoa/CreateUserService";
import { LoginService } from "../services/Pessoa/LoginService";


export class PessoaController{
    async create(request: Request, response: Response) {
        try {
            const student = request.body;        

            const createUserService = new CreatePessoaService();
            const studentSaved = await createUserService.execute(student);

            return response.status(201).json(studentSaved);            
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }

    async login(request: Request, response: Response) {
        try {
            const { email, password } = request.body;        

            const loginService = new LoginService();
            const token = await loginService.execute({ email, password });

            return response.status(200).json(token);            
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message, title: error.title });
        }        
    }
}