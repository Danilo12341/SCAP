import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {ParecerService} from 'src/app/shared/services/parecer.service'



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
  selector: 'app-parecer',
  templateUrl: './parecer.component.html',
  styleUrls: ['./parecer.component.scss'],
  providers:[ AfastamentoService, ParecerService]
})
export class ParecerComponent implements OnInit {
  registerForm: FormGroup;
  admin: boolean = false;
  studentId: number;
  professores = [];
  afastamentos = [];
  valor1:boolean = false;
  valor2:boolean = true;
  professorID: number;
  professorname:string
    
  constructor(private studentService : StudentService, 
  private authService: AuthenticationService,
  private  afastamentoService: AfastamentoService,
  private parecerService:ParecerService,
  private formBuilder: FormBuilder, private router: Router,
  private cookieService: CookieService
    ) {}

  ngOnInit(): void {
    this.professorID= parseFloat(this.cookieService.get('studentId'));
    this.listProfessor();
    this.listafastamentos();
    this.registerForm = this.formBuilder.group({
      data_parecer: [null, [Validators.required]],
      motivo: [null, [Validators.required]],
      id_afastamento: [null, [Validators.required]],
      julgamento: [null, [Validators.required]],
    
    })

  }
  Sair(){
    alert("Você Foi Deslogado do Scap")
    this.cookieService.deleteAll();
 }
  async listafastamentos() {
    const afastamentos = await this.afastamentoService.findAll();
    this.afastamentos = afastamentos;
    console.log(this.afastamentos);
    
  }

  async listProfessor() {
    const professores = await this.studentService.findAll(1,10);
    this.professores = professores;
    //console.log(this.professores);
    
  }
 
 

  async onSubmit() {
     
     if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    
    const form = this.registerForm.value;
  
    const parecer = {
      id_professor:this.professorID,
      data_parecer:form.data_parecer,
      motivo:form.motivo,
      id_afastamento:form.id_afastamento,
      julgamento:form.julgamento
    }

    try {
      await this.parecerService.createParecer(parecer);
      this.router.navigate(['home/showhome']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }
}
