import { StudentOptions } from './../student-options';
import { StudentHome } from './student-home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentAdd } from '../student-add/student-add';
import { StudentProfile } from '../student-profile/student-profile';
import { StudentSearch } from '../student-search/student-search';
@NgModule({
  declarations: [
    StudentHome,
    StudentAdd,
    StudentProfile,
    StudentSearch
  ],
  imports: [
    IonicPageModule.forChild(StudentHome),
  ],
  entryComponents: [
      StudentHome,
      StudentAdd,
      StudentProfile,
      StudentSearch
  ],
  providers:[
    StudentOptions
  ]
})
export class StudentHomeModule {}
