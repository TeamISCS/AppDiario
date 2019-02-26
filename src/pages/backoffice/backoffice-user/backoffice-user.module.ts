import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackofficeUserPage } from './backoffice-user';

@NgModule({
  declarations: [
    BackofficeUserPage,
  ],
  imports: [
    IonicPageModule.forChild(BackofficeUserPage),
  ],
})
export class BackofficeUserPageModule {}
