import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatterAdd } from './matter-add';

@NgModule({
  declarations: [
    MatterAdd,
  ],
  imports: [
    IonicPageModule.forChild(MatterAdd),
  ],
})
export class MatterAddModule {}
