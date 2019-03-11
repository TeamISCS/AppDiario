import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackofficeStudentPage } from './backoffice-student';

@NgModule({
  declarations: [
    BackofficeStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(BackofficeStudentPage),
  ],
})
export class BackofficeStudentPageModule {}
