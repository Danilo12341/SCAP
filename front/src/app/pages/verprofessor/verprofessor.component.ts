import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';
import  {MandatoService }  from 'src/app/shared/services/mandato.service';
import {ParentescoService} from 'src/app/shared/services/parentesco.service';


@Component({
  selector: 'app-verprofessor',
  templateUrl: './verprofessor.component.html',
  styleUrls: ['./verprofessor.component.scss'],
  providers:[AfastamentoService,MandatoService,ParentescoService]
})
export class VerprofessorComponent implements OnInit {

  prof:any;
  meusAfastamentos=[];
  meusParentescos=[];
  enumSituacao =["Iniciado","Liberado","AprovadoDI","AprovadoCT","AprovadoPRPPG","Cancelado","Reprovado","Arquivado"]
  tipoParente=["Sanguineo","Matrimonial"]
  tipoAfastamento=["Nacional","Internacional"]
  tipoonus =["Total","Parcial","Inexistente"]

  constructor(private PessoaService:StudentService, 
    private router: Router,private route: ActivatedRoute,
    private  afastamentoService: AfastamentoService,
    private mandatoService: MandatoService,
    private parentescoService:ParentescoService
    ) {
    
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.professor()
    this.listAfastamento();
  }
  async professor(){
    const prof = await this.PessoaService.findAllId(this.route.snapshot.params['id'])
    this.prof = prof;
    console.log(prof);
  }

  async listAfastamento(){
    const meusAfastamentos = await this.afastamentoService.findAllbyId(this.route.snapshot.params['id'])
    this.meusAfastamentos = meusAfastamentos
    console.log(this.meusAfastamentos)
  }

  async listParentesco() {

    const meusParentescos = await this.parentescoService.findAllbyId(this.route.snapshot.params['id'])
    this.meusParentescos = meusParentescos
    console.log(this.meusParentescos);
     
   }


}
