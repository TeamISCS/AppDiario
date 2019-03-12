import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentAdd } from './parent-add';

@NgModule({
  declarations: [
    ParentAdd,
  ],
  imports: [
    IonicPageModule.forChild(ParentAdd),
  ],
})
export class ParentAddModule {}