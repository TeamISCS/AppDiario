import { ParentAdd } from './parent-add';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    ParentAdd,
  ],
  imports: [
    IonicPageModule.forChild(ParentAdd),
  ],
})
export class BackofficeParentPageModule {}
