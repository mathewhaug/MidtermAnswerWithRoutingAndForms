import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  //We need to create a form group
  form: FormGroup | undefined

  /*
  FormGroup expects to be called with an object structure
  that has propeties named for the controls that will be in hte group
  set the value of each property to a new instance of FormControl
   */

  ngOnInit(){
    this.form=new FormGroup({
      job: new FormControl('Teacher'),
      name: new FormControl(''),
      category: new FormControl('Programming'),
      year: new FormControl('')
    });
  }
  onSubmit(mediaItem: any){
    console.log(mediaItem);
  }

}
