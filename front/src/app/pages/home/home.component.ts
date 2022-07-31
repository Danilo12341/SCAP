import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  admin: boolean = false;

  ngOnInit(): void {
    this.admin = this.stringToBoolean(this.cookieService.get('admin'));
    
  }
  stringToBoolean(string: string): boolean {
    if(string ==='true'){
      return true;
    }
    return false;
  }

}
