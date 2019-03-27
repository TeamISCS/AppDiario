import { MatterOptions } from './../matter-options';
import { MatterAdd } from './../matter-add/matter-add';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatterHomePage } from './matter-home';

@NgModule({
  declarations: [
    MatterHomePage,
    MatterAdd
  ],
  imports: [
    IonicPageModule.forChild(MatterHomePage),
  ],
  entryComponents: [
    MatterHomePage,
    MatterAdd
  ],
  providers:[
    MatterOptions
  ]
})
export class MatterHomePageModule {}
