import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StudentService } from 'src/app/shared/services/student.service';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';
import  {MandatoService }  from 'src/app/shared/services/mandato.service';
import {ParentescoService} from 'src/app/shared/services/parentesco.service';

@Component({
  selector: 'app-showhome',
  templateUrl: './showhome.component.html',
  styleUrls: ['./showhome.component.scss'],
  providers:[AfastamentoService,MandatoService,ParentescoService]
  
})
export class ShowhomeComponent implements OnInit {

  constructor(private cookieService: CookieService, 
             private studentService:StudentService,
             private  afastamentoService: AfastamentoService,
             private mandatoService: MandatoService,
             private parentescoService:ParentescoService) { }
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
  meusAfastamentos=[];
  meusParentescos=[];
  meusMandato=[];
  meuprofesores=[];
  enumSituacao =["Iniciado","Liberado","AprovadoDI","AprovadoCT","AprovadoPRPPG","Cancelado","Reprovado","Arquivado"]
  tipoParente=["Sanguineo","Matrimonial"]
  tipoAfastamento=["Nacional","Internacional"]
  tipoonus =["Total","Parcial","Inexistente"]
  
  ngOnInit(): void {
    this.professorId = parseFloat(this.cookieService.get('studentId'));
    this.listProfessor();
    this.listAfastamento();
    this.listParentesco();
    this.alguem = this.alguemvalor(this.cookieService.get('admin'))
    this.admin = this.stringToBoolean(this.cookieService.get('admin'));
    this.email = this.stringToBoolean(this.cookieService.get('email'));
    this.e_mail = this.cookieService.get('email')
    this.nome = this.cookieService.get('nome')
  }
 
 async listParentesco() {

  const meusParentescos = await this.parentescoService.findAllbyId(this.professorId)
  this.meusParentescos = meusParentescos
  console.log(this.meusParentescos);
   
 }
  async listAfastamento(){
    const meusAfastamentos = await this.afastamentoService.findAllbyId(this.professorId)
    this.meusAfastamentos = meusAfastamentos
    console.log(this.meusAfastamentos)
  }
  async listProfessor() {
    const professores = await this.studentService.findAllId(this.professorId);
    this.professores = professores;
    this.telefone = professores.telephone;
    this.name2 =professores.user.name;
     
  }
 
 
  alguemvalor(string){

    if(string ==='true'){
      return "Olá, Secretário";
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
