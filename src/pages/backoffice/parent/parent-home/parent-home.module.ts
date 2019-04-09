import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentHomePage } from './parent-home';
import { ParentAdd } from '../parent-add/parent-add';
import { ParentOptions } from '../parent-options';

@NgModule({
  declarations: [
    ParentHomePage,
    ParentAdd
  ],
  imports: [
    IonicPageModule.forChild(ParentHomePage),
  ],
  entryComponents: [
    ParentAdd,
    ParentHomePage
  ],
  providers:[
    ParentOptions
  ]
})
export class ParentHomePageModule {}
