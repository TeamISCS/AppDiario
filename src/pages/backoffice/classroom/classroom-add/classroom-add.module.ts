import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassroomAdd } from './classroom-add';

@NgModule({
  declarations: [
    ClassroomAdd,
  ],
  imports: [
    IonicPageModule.forChild(ClassroomAdd),
  ],
})
export class ClassroomAddPageModule {}
