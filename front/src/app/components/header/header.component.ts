import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  admin: boolean = false;


  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.admin = this.stringToBoolean(this.cookieService.get('admin'));
  }

  thankYou(){
    alert("Obrigado por curtir a página!")
    this.cookieService.deleteAll();
  }
  Sair(){
    alert("Você Foi Deslogado do Scap")
    this.cookieService.deleteAll();
  }
  stringToBoolean(string: string): boolean {
    if(string ==='true'){
      return true;
    }
    if(string ==='false'){
      return true;
    }
    return false;
  }
 

}
