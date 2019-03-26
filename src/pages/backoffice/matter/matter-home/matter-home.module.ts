import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatterHomePage } from './matter-home';

@NgModule({
  declarations: [
    MatterHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MatterHomePage),
  ],
})
export class MatterHomePageModule {}
