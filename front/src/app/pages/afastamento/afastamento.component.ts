import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



class CustomValidators {
  static passwordContainsNumber(control: AbstractControl): ValidationErrors {
    const regex= /\d/;

    if(regex.test(control.value) && control.value !== null) {
      return null;
    } else {
      return {passwordInvalid: true};
    }
  }

  static passwordsMatch (control: AbstractControl): ValidationErrors {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if((password === confirmPassword) && (password !== null && confirmPassword !== null)) {
      return null;
    } else {
      return {passwordsNotMatching: true};
    }
  }
}


@Component({
  selector: 'app-afastamento',
  templateUrl: './afastamento.component.html',
  styleUrls: ['./afastamento.component.scss'],
  providers:[ AfastamentoService]
})
export class AfastamentoComponent implements OnInit {

  registerForm: FormGroup;
  admin: boolean = false;
  studentId: number;
  professores = [];
  valor1:boolean = false;
  valor2:boolean = true;
  professorID: number;
    
    constructor(private studentService : StudentService, 
    private authService: AuthenticationService,
    private  afastamentoService: AfastamentoService,
    private formBuilder: FormBuilder, private router: Router,
    private cookieService:CookieService
    ) {}

  ngOnInit(): void {
    this.professorID= parseFloat(this.cookieService.get('studentId'));
    this.listProfessor();
    this.registerForm = this.formBuilder.group({
      nome_evento: [null, [Validators.required]],
      data_inicio_afastamento: [null, [Validators.required]],
      data_final_afastamento: [null, [Validators.required]],
      data_inicio_evento: [null, [Validators.required]],
      data_fim_evento: [null, [Validators.required]],
      tipoAfastamento:[null, [Validators.required]],
      onus:[null, [Validators.required]],
      motivo:[null, [Validators.required]]

    })

  }
  Sair(){
    alert("Você Foi Deslogado do Scap")
    this.cookieService.deleteAll();
  }


  async listProfessor() {
    const professores = await this.studentService.findAll(1,10);
    this.professores = professores;
    
  }
 
 

  async onSubmit() {
     
     if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    
    const form = this.registerForm.value;
    
    const afastamento = {
      id_professor : this.professorID,
      nome_evento :form.nome_evento,
      data_inicio_afastamento:form.data_inicio_afastamento,
      data_final_afastamento:form.data_final_afastamento,
      data_inicio_evento:form.data_inicio_evento,
      data_fim_evento:form.data_fim_evento,
      situacao:0,
      tipoAfastamento:form.tipoAfastamento,
      onus:form.onus,
      motivo:form.motivo
    }

    try {
      await this.afastamentoService.createAfastamento(afastamento);
      this.router.navigate(['home/showhome']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }

}
