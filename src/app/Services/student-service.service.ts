import { Injectable } from '@angular/core';
import {CONTENT} from "../../mock-content/content";
import {Student} from "../models/student";
import {Observable, of} from "rxjs";
//Http client
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  //Important, you usually need to construct things
  constructor(private http: HttpClient) { }
  getContent(): Student[]{ //Old method
    return CONTENT;
  }

  getContentByName(studentName:string): Observable<Student[]>{
    return of(CONTENT.filter(content => content.studentName == studentName));
  }

  getStudents(): Observable<any>{ //new method
    return this.http.get('api/students')
  }
}
