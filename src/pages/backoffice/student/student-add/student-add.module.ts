import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentAdd } from './student-add';

@NgModule({
  declarations: [
    StudentAdd,
  ],
  imports: [
    IonicPageModule.forChild(StudentAdd),
  ],
})
export class StudentAddPageModule {}
