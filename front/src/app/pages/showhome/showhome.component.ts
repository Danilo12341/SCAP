import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-showhome',
  templateUrl: './showhome.component.html',
  styleUrls: ['./showhome.component.scss']
})
export class ShowhomeComponent implements OnInit {

  constructor(private cookieService: CookieService, private studentService:StudentService) { }
  admin: boolean = false;
  email: boolean = false;
  id:number
  alguem: string;
  e_mail: string;
  nome: string;
  professor:any
  professorId: number;
  professores:any;
  telefone:string;
  name2:string;

  


  ngOnInit(): void {
    this.professorId = parseFloat(this.cookieService.get('studentId'));
    this.listProfessor();
    this.alguem = this.alguemvalor(this.cookieService.get('admin'))
    this.admin = this.stringToBoolean(this.cookieService.get('admin'));
    this.email = this.stringToBoolean(this.cookieService.get('email'));
    this.e_mail = this.cookieService.get('email')
    this.nome = this.cookieService.get('nome')
  }

  async listProfessor() {
    const professores = await this.studentService.findAllId(this.professorId);
    this.professores = professores;
    this.telefone = professores.telephone;
    this.name2 =professores.user.name;
     
  }
 
 
  alguemvalor(string){

    if(string ==='true'){
      return "Olá, Admin";
    }
    if(string ==='false'){
      return "Olá, Professor";
    }
    return "Usuário Não autenticado"

  }
  stringToBoolean(string: string): boolean {
    if(string ==='true'){
      return true;
    }
    return false;
  }

}
