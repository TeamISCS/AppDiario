import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Task } from './task';

@NgModule({
  declarations: [
    Task,
  ],
  imports: [
    IonicPageModule.forChild(Task),
  ],
})
export class TaskPageModule {}
