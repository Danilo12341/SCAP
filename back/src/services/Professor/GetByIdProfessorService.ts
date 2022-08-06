import { getRepository } from "typeorm";
import { Student } from "../../database/modelos/Professor";

interface Props {
    page?: number,
    limit?: number,
}

export class GetByIdProfessorService {
    async execute({ page, limit }: Props): Promise<[Student[], undefined | number ]> {
        const repo = getRepository(Student);

        const offset = (page - 1) * limit;
        
        const [ students, count ] = await repo.createQueryBuilder("students")
            .innerJoinAndSelect('students.user', 'users')
            .where('users.admin = :admin', { admin: true })
            .orderBy('users.name', 'ASC')
            .limit(limit)
            .offset(offset)
            .getManyAndCount();

        return [ students, count ];
    }
    async execute2 (): Promise<Student[]> {
        const repo = getRepository(Student);

        const professores  =  await repo.createQueryBuilder("students")
        .innerJoinAndSelect('students.user', 'users')
        .where('users.admin = :admin', { admin: false })
        .getMany();

        console.log(professores)
        return professores


    }
    async execute3(id:any): Promise<Student> {
        const repo = getRepository(Student);

        const students = await repo.createQueryBuilder("students")
        .innerJoinAndSelect('students.user', 'users')
        .where('users.id = :id', { id: id })
        .getOne()

        return students;
    }
}
    


