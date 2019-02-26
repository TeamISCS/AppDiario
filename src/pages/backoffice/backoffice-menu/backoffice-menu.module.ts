import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackofficeMenuPage } from './backoffice-menu';

@NgModule({
  declarations: [
    BackofficeMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(BackofficeMenuPage),
  ],
})
export class BackofficeMenuPageModule {}
