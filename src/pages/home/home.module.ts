import { Home } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    IonicPageModule.forChild(Home),
  ],
})
export class LoginPageModule {}
