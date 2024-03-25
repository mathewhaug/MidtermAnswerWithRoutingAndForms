/*
Here we need to create a service that will return
each part of the student object to the caller
The caller being app.component.ts
 */

import { Injectable } from '@angular/core';
import {CONTENT} from "../../mock-content/content";
import {Student} from "../models/student";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }
  /*
  We need a function that will return an array
  of type student, containg content

  Remember, this is the actual data we want to display
  and remember Student is the object def the want to use
   */

  getContent(): Student[]{
    return CONTENT;
  }

  /*
  This method takes a student name of type string and returns
  an observable of type Student[]
   */
  getContentByName(studentName:string): Observable<Student[]>{
    return of(CONTENT.filter(content => content.studentName == studentName));
  }
}
