import { TeacherOptions } from './../teacher-options';
import { TeacherAdd } from './../teacher-add/teacher-add';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherHomePage } from './teacher-home';

@NgModule({
  declarations: [
    TeacherHomePage,
    TeacherAdd
  ],
  imports: [
    IonicPageModule.forChild(TeacherHomePage),
  ],
  entryComponents: [
    TeacherAdd,
    TeacherHomePage
  ],

  providers:[
    TeacherOptions
  ]
})
export class TeacherHomePageModule {}
