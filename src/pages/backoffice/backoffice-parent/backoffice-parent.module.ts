import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackofficeParentPage } from './backoffice-parent';

@NgModule({
  declarations: [
    BackofficeParentPage,
  ],
  imports: [
    IonicPageModule.forChild(BackofficeParentPage),
  ],
})
export class BackofficeParentPageModule {}
