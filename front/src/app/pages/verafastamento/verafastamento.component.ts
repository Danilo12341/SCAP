import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';

@Component({
  selector: 'app-verafastamento',
  templateUrl: './verafastamento.component.html',
  styleUrls: ['./verafastamento.component.scss'],
  providers:[AfastamentoService]
})
export class VerafastamentoComponent implements OnInit {

  afastamentos:any;

  constructor(private route: ActivatedRoute,private afastamentoService: AfastamentoService) { 

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.listafastamento();
  }


  async listafastamento(){
    const afastamentos = await this.afastamentoService.findAllbyIdone(this.route.snapshot.params['id'])
    this.afastamentos= afastamentos;
    console.log(this.afastamentos);
  }

}
