import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { User } from './user';

@NgModule({
  declarations: [
    User,
  ],
  imports: [
    IonicPageModule.forChild(User),
  ],
})
export class UserPageModule {}
