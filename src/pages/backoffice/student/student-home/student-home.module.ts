import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentHome } from './student-home';

@NgModule({
  declarations: [
    StudentHome,
  ],
  imports: [
    IonicPageModule.forChild(StudentHome),
  ],
})
export class StudentHomeModule {}
