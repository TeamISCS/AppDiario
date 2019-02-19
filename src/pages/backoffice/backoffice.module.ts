import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackofficePage } from './backoffice';

@NgModule({
  declarations: [
    BackofficePage,
  ],
  imports: [
    IonicPageModule.forChild(BackofficePage),
  ],
})
export class BackofficePageModule {}
