import { Component, OnInit } from '@angular/core';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';



@Component({
  selector: 'app-listafastamento',
  templateUrl: './listafastamento.component.html',
  styleUrls: ['./listafastamento.component.scss'],
  providers:[AfastamentoService]
})
export class ListafastamentoComponent implements OnInit {

  afastamentos = []

  constructor( private afastamentoService: AfastamentoService) { }

  ngOnInit(): void {
   
    this.listafastamento();
  }

  async listafastamento(){
    const afastamentos = await this.afastamentoService.findAll()
    this.afastamentos= afastamentos;
    console.log(this.afastamentos);
  }

 
}
