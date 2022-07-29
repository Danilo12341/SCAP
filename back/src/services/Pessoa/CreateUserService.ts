import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import { Student } from '../../database/entities/Professor';
import { User } from "../../database/entities/Pessoa";
import AppError from '../../shared/errors/AppError';

export class CreatePessoaService {
    async execute(student: Student): Promise<Student> {
        const repo = getRepository(Student);
        const repoUser = getRepository(User);

        const userWithTheSameEmail = await repoUser.findOne({ where: {email: student.user.email} } );
        if(userWithTheSameEmail){
            throw new AppError({message: "Já existe um usuário com este e-mail", statusCode: 400, title: "Error! Não foi possível cadastrar!"});
        }
       
       
        student.user.password = await hash(student.user.password, 8);
        
        const studentCreated = await repo.create(student);
        const studentSaved = await repo.save(studentCreated);

        return studentSaved;
    }
}