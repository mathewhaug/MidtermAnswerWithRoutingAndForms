import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {FormGroup, FormControl} from "@angular/forms";
import {Router } from '@angular/router';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatButton
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  //We need to create a form group
  //form: FormGroup | undefined

  newMediaItem = this.formBuilder.group({
    name: '',
    category: '',
    year: '',
    job: ''

  })
  constructor(private formBuilder : FormBuilder,
              private router: Router
   ){

  }

  /*
  FormGroup expects to be called with an object structure
  that has propeties named for the controls that will be in hte group
  set the value of each property to a new instance of FormControl
   */

  /*ngOnInit(){
    this.form=new FormGroup({
      job: new FormControl('Teacher'),
      name: new FormControl(''),
      category: new FormControl('Programming'),
      year: new FormControl('')
    });
  }*/
  onSubmit(){
    console.warn("Your order has been submitted");
    //print just the name to the console
    console.log(this.newMediaItem.value.name);
    this.router.navigateByUrl('/'+this.newMediaItem.value.job)


  }

}
