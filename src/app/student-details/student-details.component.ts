import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {
  @Input() contentItems?: Student;

}
