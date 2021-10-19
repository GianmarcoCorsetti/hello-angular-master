import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseDetailsListComponent } from './courses/course-deatails-list/course-details-list.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsListComponent } from './student/student-deatails-list/student-details-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent , data: { animationState: 'One' }},

  { path: 'courses', component: CourseListComponent, data: { animationState: 'Three' } },

  { path: 'students', component: StudentListComponent, data: { animationState: 'Two' } },

  { path: 'addcourse/:id', component: CourseAddComponent, data: { animationState: 'Add' } },
  
  { path: 'coursedetails/:id', component: CourseDetailsListComponent, data: { animationState: 'ThreeDetails' }},

  { path: 'studentdetails', component: StudentDetailsListComponent, data: { animationState: 'TwoDetails' }},

  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
