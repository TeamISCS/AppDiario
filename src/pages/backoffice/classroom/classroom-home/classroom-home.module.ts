import { ClassroomOptions } from './../classroom-options';
import { ClassroomAdd } from './../classroom-add/classroom-add';
import { IonicPageModule } from 'ionic-angular';
import { ClassroomHome } from './../classroom-home/classroom-home';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    ClassroomHome,
    ClassroomAdd

  ],
  imports: [
    IonicPageModule.forChild(ClassroomHome),

  ],
  entryComponents: [
    ClassroomHome,
    ClassroomAdd
  ],
  providers:[
    ClassroomOptions
  ]
})
export class ClassroomHomeModule {}
