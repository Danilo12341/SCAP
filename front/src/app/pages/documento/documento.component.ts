import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { AfastamentoService } from 'src/app/shared/services/afastamento.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {DocumentoService} from 'src/app/shared/services/documento.service'



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
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss'],
  providers:[ AfastamentoService, DocumentoService]
})
export class DocumentoComponent implements OnInit {
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
  private documentoService:DocumentoService,
  private formBuilder: FormBuilder, private router: Router,
  private cookieService: CookieService
    ) {}

  ngOnInit(): void {
    this.professorID= parseFloat(this.cookieService.get('studentId'));
    this.listProfessor();
    this.listafastamentos();
    this.registerForm = this.formBuilder.group({
      nome_documento: [null, [Validators.required]],
      titulo: [null, [Validators.required]],
      data_documento: [null, [Validators.required]],
      id_afastamento: [null, [Validators.required]],
    
    })

  }

  Sair(){
    alert("Você Foi Deslogado do Scap")
    this.cookieService.deleteAll();
  }
  async listafastamentos() {
    const afastamentos = await this.afastamentoService.findAllbyId(this.professorID)
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
  
    const documento = {
      nome_documento:form.nome_documento,
      titulo_documento:form.titulo,
      data_documento:form.data_documento,
      id_afastamento:form.id_afastamento
    }

    try {
      await this.documentoService.createDocumento(documento);
      this.router.navigate(['home/showhome']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }
}
