import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingTask } from './setting-task';

@NgModule({
  declarations: [
    SettingTask,
  ],
  imports: [
    IonicPageModule.forChild(SettingTask),
  ],
})
export class SettingTaskPageModule {}
