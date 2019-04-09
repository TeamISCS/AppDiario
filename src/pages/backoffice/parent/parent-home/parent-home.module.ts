import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentHome } from './parent-home';
import { ParentAdd } from '../parent-add/parent-add';
import { ParentOptions } from '../parent-options';

@NgModule({
  declarations: [
    ParentHome,
    ParentAdd
  ],
  imports: [
    IonicPageModule.forChild(ParentHome),
  ],
  entryComponents: [
    ParentAdd,
    ParentHome
  ],
  providers:[
    ParentOptions
  ]
})
export class ParentHomeModule {}
