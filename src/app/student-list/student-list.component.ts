import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';
import { Student } from '../models/student';
import { StudentDetailsComponent} from "../student-details/student-details.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    StudentDetailsComponent,
    NgForOf
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  content?: Student[];
  contentItems: Student[] = [];

  //constructor to start the service
  constructor(private studentService: StudentServiceService) {

  }

  //call my oninit to get data from the service
  ngOnInit():void {
    this.contentItems = this.studentService.getContent();
  }

}
