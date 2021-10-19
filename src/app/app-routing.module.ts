import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseDetailsListComponent } from './courses/course-deatails-list/course-details-list.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { EditionAddComponent } from './editions/edition-add/edition-add.component';
import { EditionDetailsListComponent } from './editions/edition-details-list/edition-details-list.component';
import { EditionListComponent } from './editions/edition-list/edition-list.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsListComponent } from './student/student-deatails-list/student-details-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent , data: { animationState: 'One' }},

  { path: 'students', component: StudentListComponent, data: { animationState: 'Two' } },
  
  { path: 'courses', component: CourseListComponent, data: { animationState: 'Three' } },

  { path: 'editions' , component: EditionListComponent , data: { animationState : 'Four'} },
  
  { path: 'editiondetails/:id' , component: EditionDetailsListComponent , data: { animationState : 'FourDetails'} },

  { path: 'studentdetails', component: StudentDetailsListComponent, data: { animationState: 'TwoDetails' }},
  
  { path: 'coursedetails/:id', component: CourseDetailsListComponent, data: { animationState: 'ThreeDetails' }}, 
  
  { path: 'addcourse/:id', component: CourseAddComponent, data: { animationState: 'Add' } },

  { path: 'addedition/:id' , component: EditionAddComponent , data: { animationState : 'Add'} },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
