import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
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
  selector: 'app-secretario',
  templateUrl: './secretario.component.html',
  styleUrls: ['./secretario.component.scss']
})
export class SecretarioComponent implements OnInit {

  registerForm: FormGroup;
  admin: boolean = false;
  email: boolean = false;

  constructor(private authService: AuthenticationService, 
    private formBuilder: FormBuilder,
     private router: Router,
     private cookieService: CookieService
     ) {}

  ngOnInit(): void {
    this.admin = this.stringToBoolean(this.cookieService.get('admin'));
    this.email = this.stringToBoolean(this.cookieService.get('email'));
    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [ Validators.required, Validators.email, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(3), CustomValidators.passwordContainsNumber]],
      confirmPassword: [null, [Validators.required]],
      telephone: [null, ]
    },{
       validators: CustomValidators.passwordsMatch
    })
  }
  Sair(){
    alert("Você Foi Deslogado do Scap")
    this.cookieService.deleteAll();
  }
  stringToBoolean(string: string): boolean {
    if(string ==='true'){
      return true;
    }
    return false;
  }
  async onSubmit() {
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }

    const form = this.registerForm.value;

    const student = {
      user: {
        name: form.name,
        email: form.email,
        password: form.password,
        admin:true
      },
      telephone: form.telephone
    }

    try {
      await this.authService.register(student);
      this.router.navigate(['home/showhome']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }
}
