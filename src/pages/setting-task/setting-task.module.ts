import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingTaskPage } from './setting-task';

@NgModule({
  declarations: [
    SettingTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingTaskPage),
  ],
})
export class SettingTaskPageModule {}
