import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatterAddPage } from './matter-add';

@NgModule({
  declarations: [
    MatterAddPage,
  ],
  imports: [
    IonicPageModule.forChild(MatterAddPage),
  ],
})
export class MatterAddPageModule {}
