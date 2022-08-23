import { Component, OnInit } from '@angular/core';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-listaprofessor',
  templateUrl: './listaprofessor.component.html',
  styleUrls: ['./listaprofessor.component.scss'],
  providers:[StudentService ]
})
export class ListaprofessorComponent implements OnInit {

  professores = []
  allprofessor =[];

  constructor(private pessoaService: StudentService) { }

  ngOnInit(): void {
    
    this.listprofessor()
    
  }

  async listprofessor(){
    const professor = await this.pessoaService.findAll(1,10)
    this.allprofessor = professor;
    this.professores = professor;
    console.log(this.professores);
  }

  async deleteProfessor(id) {
    try {
      await this.pessoaService.delete(id);
      alert("Excluimos o professor conforme solicitado!");
      const index = this.professores.find(professor => professor.id == id);
      this.professores.splice(index, 1);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }


}
