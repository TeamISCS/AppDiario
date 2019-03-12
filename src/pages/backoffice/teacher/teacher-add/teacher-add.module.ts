import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAdd } from './teacher-add';

@NgModule({
  declarations: [
    TeacherAdd
  ],
  imports: [
    IonicPageModule.forChild(TeacherAdd),
  ],
})
export class TeacherAddPageModule {}
