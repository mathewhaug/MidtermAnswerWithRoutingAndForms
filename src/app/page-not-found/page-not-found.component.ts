import { Component } from '@angular/core';
import {DatePipe, UpperCasePipe} from "@angular/common";
import {HighlightDirective} from "../Directives/highlight.directive";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    HighlightDirective
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  colourFromTypescript = 'lightblue'
  date = new Date();
}
