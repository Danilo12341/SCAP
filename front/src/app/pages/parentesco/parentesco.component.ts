import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { ParentescoService } from 'src/app/shared/services/parentesco.service';
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
  selector: 'app-parentesco',
  templateUrl: './parentesco.component.html',
  styleUrls: ['./parentesco.component.scss'],
  providers:[ParentescoService]
})
export class ParentescoComponent implements OnInit {

  registerForm: FormGroup;
  admin: boolean = false;
  studentId: number;
  professores = [];
  valor1:boolean = false;
  valor2:boolean = true;
    
    constructor(private studentService : StudentService, 
    private authService: AuthenticationService,
    private parentescoService:ParentescoService,
    private formBuilder: FormBuilder, private router: Router,
    private cookieService: CookieService
    ) {}

  ngOnInit(): void {
    this.listProfessor();
    this.registerForm = this.formBuilder.group({
      id_professor1: [1, [Validators.required]],
      id_professor2: [null, [Validators.required]],
      tipo: [null, [Validators.required]],
    })

  }

  async listProfessor() {
    const professores = await this.studentService.findAll(1,10);
    this.professores = professores;
    console.log(this.professores);
    
  }
 
  Sair(){
    alert("Você Foi Deslogado do Scap")
    this.cookieService.deleteAll();
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
  
    const parentesco = {
      id_professor1:form.id_professor1,
      id_professor2: form.id_professor2,
      tipo: form.tipo,
    }

    try {
      await this.parentescoService.createParentesco(parentesco);
      this.router.navigate(['home/showhome']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }


}
