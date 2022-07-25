import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  formulario: FormGroup;

  constructor( private formBuilder :FormBuilder, private router: Router,private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      data: [null, [Validators.required]],
    
    }); 
  }
  async onSubmit() {

    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value.name);

    const form = this.formulario.value;

    
    const category = {

      name: form.name,
      description: form.description,
      data: form.data,
      
    }
    console.log(category);
    try {
    
      await this.categoryService.createCategory(category)
      
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
    
  }

}
