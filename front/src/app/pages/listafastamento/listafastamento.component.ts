import { Component, OnInit } from '@angular/core';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-listafastamento',
  templateUrl: './listafastamento.component.html',
  styleUrls: ['./listafastamento.component.scss'],
  providers:[AfastamentoService]
})
export class ListafastamentoComponent implements OnInit {

  afastamentos = []
  allafastamentos =[];
  enumSituacao =["Iniciado","Liberado","AprovadoDI","AprovadoCT","AprovadoPRPPG","Cancelado","Reprovado","Arquivado"]
  tipoParente=["Sanguineo","Matrimonial"]
  tipoAfastamento=["Nacional","Internacional"]
  tipoonus =["Total","Parcial","Inexistente"]
  admin:boolean=false;

  constructor( private afastamentoService: AfastamentoService,
    private cookieService: CookieService) { }

  ngOnInit(): void {  
    this.listafastamento();
    this.admin = this.stringToBoolean(this.cookieService.get('admin'));
  }

  async listafastamento(){
    const afastamentos = await this.afastamentoService.findAll()
    this.allafastamentos = afastamentos;
    this.afastamentos= afastamentos;
    console.log(this.afastamentos);
  }

  stringToBoolean(string: string): boolean {
    if(string ==='true'){
      return true;
    }
    return false;
  }
  
  pesquisaprofessor(termo:String):void{

      this.afastamentos = this.allafastamentos.filter(afastamento=>{
        return afastamento.user.name.toLowerCase().includes(termo)
      })
      console.log(termo);
  }

  pesquisanome(termo:String):void{

    this.afastamentos = this.allafastamentos.filter(afastamento=>{
      return afastamento.nome_evento.toLowerCase().includes(termo)
    })
    console.log(termo);
}
  
  async deleteStudent(id) {
    try {
      await this.afastamentoService.deleteAfastamento(id);
      alert("Excluimos o afastamento conforme solicitado!");
      const index = this.afastamentos.find(afastamentos => afastamentos.id == id);
      this.afastamentos.splice(index, 1);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  } 

 
}
