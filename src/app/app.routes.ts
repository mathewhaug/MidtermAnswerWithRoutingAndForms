import { Routes } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {FormComponent} from "./form/form.component";

export const routes: Routes = [
  { path:'allStudents', component: StudentListComponent },
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path:'form',component: FormComponent},

  {path:'**',redirectTo:'allStudents',pathMatch:'full'}

];
