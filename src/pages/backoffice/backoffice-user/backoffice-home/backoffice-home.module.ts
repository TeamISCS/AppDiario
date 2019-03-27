import { BackofficeOptions } from './../backoffice-options';
import { BackofficeAdd } from './../backoffice-add/backoffice-add';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackofficeHome } from './backoffice-home';

@NgModule({
  declarations: [
    BackofficeHome,
    BackofficeAdd
  ],
  imports: [
    IonicPageModule.forChild(BackofficeHome),
  ],
  entryComponents: [
    BackofficeAdd,
    BackofficeHome
  ],
  providers:[
    BackofficeOptions
  ]
})
export class BackofficeHomeModule {}
