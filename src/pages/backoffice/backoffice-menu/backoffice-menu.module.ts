import { ParentHomePageModule } from './../parent/parent-home/parent-home.module';
import { BackofficeOptions } from './../backoffice-user/backoffice-options';
import { TeacherHomePageModule } from './../teacher/teacher-home/teacher-home.module';
import { MatterHomePageModule } from './../matter/matter-home/matter-home.module';
import { StudentHomeModule } from './../student/student-home/student-home.module';
import { ClassroomHomeModule } from './../classroom/classroom-home/classroom-home.module';

import { IonicPageModule } from 'ionic-angular';

import { BackofficeHomeModule } from './../backoffice-user/backoffice-home/backoffice-home.module';
import { BackofficeMenu } from './backoffice-menu';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    BackofficeMenu

  ],
  imports: [
    IonicPageModule.forChild(BackofficeMenu),
    BackofficeHomeModule,
    ClassroomHomeModule,
    StudentHomeModule,
    MatterHomePageModule,
    TeacherHomePageModule,
    ParentHomePageModule
  ],
  entryComponents: [
    BackofficeMenu
  ],
  providers:[
    BackofficeOptions
  ]
})
export class BackofficeMenuModule {}
