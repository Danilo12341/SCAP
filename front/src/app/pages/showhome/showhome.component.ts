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


  ngOnInit(): void {
    this.alguem = this.alguemvalor(this.cookieService.get('admin'))
    this.admin = this.stringToBoolean(this.cookieService.get('admin'));
    this.email = this.stringToBoolean(this.cookieService.get('email'));
    this.e_mail = this.cookieService.get('email')
    this.nome = this.cookieService.get('nome')
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
