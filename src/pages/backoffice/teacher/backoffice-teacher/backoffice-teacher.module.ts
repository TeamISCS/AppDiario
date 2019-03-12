import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackofficeTeacherPage } from './backoffice-teacher';

@NgModule({
  declarations: [
    BackofficeTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(BackofficeTeacherPage),
  ],
})
export class BackofficeTeacherPageModule {}
