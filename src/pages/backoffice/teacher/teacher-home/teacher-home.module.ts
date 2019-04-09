import { TeacherOptions } from './../teacher-options';
import { TeacherAdd } from './../teacher-add/teacher-add';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherHome } from './teacher-home';

@NgModule({
  declarations: [
    TeacherHome,
    TeacherAdd
  ],
  imports: [
    IonicPageModule.forChild(TeacherHome),
  ],
  entryComponents: [
    TeacherAdd,
    TeacherHome
  ],

  providers:[
    TeacherOptions
  ]
})
export class TeacherHomeModule {}
