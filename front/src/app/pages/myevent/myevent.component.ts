import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EventHasStudentService } from '../../shared/services/eventHasStudent.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { MandatoService } from 'src/app/shared/services/mandato.service';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.scss'],
  providers:[MandatoService]
})
export class MyeventComponent implements OnInit {

  public events: any[] = [];
  studentId: number;
  sportname: Array<string> =  ['', ''];
  descricaoesport: Array<string> =  ['', ''];

  constructor(private mandatoService: MandatoService,private eventHasStudentService :EventHasStudentService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.studentId = parseFloat(this.cookieService.get('studentId'));
    console.log(this.studentId)
    this.listEvents();


   
  }

  async listEvents(){
    const mandatos = await this.mandatoService.findAll(this.studentId)
    console.log(mandatos);
    const events = await this.eventHasStudentService.findAll(this.studentId)
    console.log(events);
    
  }

  async unsubscrible(event){
    try {
      await this.eventHasStudentService.unsubscrible(this.studentId, event.id);
      alert("Cancelamos sua inscrição conforme solicitado!");
      const index = this.events.find(myevent => myevent.id == event.id);
      this.events.splice(index, 1);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }

}
