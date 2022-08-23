import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-editar-afastamento',
  templateUrl: './editar-afastamento.component.html',
  styleUrls: ['./editar-afastamento.component.scss'],
  providers:[AfastamentoService]
})
export class EditarAfastamentoComponent implements OnInit {

  afastamentos:any=[];
  registerForm: FormGroup;
  admin: boolean = false;

  constructor(private route: ActivatedRoute,
    private afastamentoService: AfastamentoService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private cookieService: CookieService) { 

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.listafastamento();
    this.admin = this.stringToBoolean(this.cookieService.get('admin'));
  }

  formulario(){
    this.registerForm = this.formBuilder.group({
      nome_evento: [this.afastamentos.nome_evento],
      data_inicio_afastamento: [this.afastamentos.data_inicio_afastamento],
      data_final_afastamento: [this.afastamentos.data_final_afastamento],
      data_inicio_evento: [this.afastamentos.data_inicio_evento],
      data_fim_evento: [this.afastamentos.data_fim_evento],
      situacao:[this.afastamentos.situacao],
      tipoAfastamento:[this.afastamentos.tipoAfastamento],
      onus:[this.afastamentos.onus],
      motivo:[this.afastamentos.motivo]

    })

  }

  stringToBoolean(string: string): boolean {
    if(string ==='true'){
      return true;
    }
    return false;
  }

  async listafastamento(){
    const afastamentos = await this.afastamentoService.findAllbyIdone(this.route.snapshot.params['id'])
    this.afastamentos= afastamentos;
    console.log(this.afastamentos);
    this.formulario();
    
  }
  async onSubmit() {
     
    if(this.registerForm.invalid){
     this.registerForm.markAllAsTouched();
     return;
   }
   
   const form = this.registerForm.value;
   
   const afastamento = {
     nome_evento :form.nome_evento,
     data_inicio_afastamento:form.data_inicio_afastamento,
     data_final_afastamento:form.data_final_afastamento,
     data_inicio_evento:form.data_inicio_evento,
     data_fim_evento:form.data_fim_evento,
     situacao:form.situacao,
     tipoAfastamento:form.tipoAfastamento,
     onus:form.onus,
     motivo:form.motivo
   }

   try {
     await this.afastamentoService.updatefastamento(this.route.snapshot.params['id'],afastamento);
     this.router.navigate(['home/listafastamento']);
   } catch (error) {
     console.log(error);
     alert(error.error.title + error.error.message);
   }
 }
}
