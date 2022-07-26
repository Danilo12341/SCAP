import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { MandatoService } from 'src/app/shared/services/mandato.service';
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
  selector: 'app-mandato',
  templateUrl: './mandato.component.html',
  styleUrls: ['./mandato.component.scss'],
  providers:[MandatoService]
})
export class MandatoComponent implements OnInit {


  registerForm: FormGroup;
  admin: boolean = false;
  studentId: number;
  professores = [];
  valor1:boolean = false;
  valor2:boolean = true;
    
    constructor(private studentService : StudentService, 
    private authService: AuthenticationService,
    private mandatoService:MandatoService,
    private formBuilder: FormBuilder, private router: Router,
    private cookieService: CookieService
    ) {}

  ngOnInit(): void {
    this.listProfessor();
    this.registerForm = this.formBuilder.group({
      professor_id: [1, [Validators.required]],
      data_inicio: [null, [Validators.required]],
      data_final: [null, [Validators.required]],
      chefe: []
    })

  }

  Sair(){
    alert("Você Foi Deslogado do Scap")
    this.cookieService.deleteAll();
  }
  async listProfessor() {
    const professores = await this.studentService.findAll(1,10);
    this.professores = professores;
    console.log(this.professores);
    
  }
 
 

  async onSubmit() {
     
     if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    
    const form = this.registerForm.value;
    console.log(form.chefe);

    if (form.chefe == 2){
      form.chefe = true;
    }else{
      form.chefe = false;
    }
  
    const mandato = {
      professor_id:form.professor_id,
      datainicio: form.data_inicio,
      datafim: form.data_final,
      chefe:form.chefe 
    }

    try {
      await this.mandatoService.createMandato(mandato);
      alert("Mandato Cadastrado com sucesso");
      this.router.navigate(['home/showhome']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }

}
