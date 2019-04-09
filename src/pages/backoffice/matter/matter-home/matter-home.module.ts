import { MatterOptions } from './../matter-options';
import { MatterAdd } from './../matter-add/matter-add';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatterHome } from './matter-home';

@NgModule({
  declarations: [
    MatterHome,
    MatterAdd
  ],
  imports: [
    IonicPageModule.forChild(MatterHome),
  ],
  entryComponents: [
    MatterHome,
    MatterAdd
  ],
  providers:[
    MatterOptions
  ]
})
export class MatterHomeModule {}
