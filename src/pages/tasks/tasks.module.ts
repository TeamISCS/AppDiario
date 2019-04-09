import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tasks } from './tasks';

@NgModule({
  declarations: [
    Tasks,
  ],
  imports: [
    IonicPageModule.forChild(Tasks),
  ],
})
export class TasksPageModule {}
