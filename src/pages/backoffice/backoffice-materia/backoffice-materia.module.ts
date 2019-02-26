import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackofficeMateriaPage } from './backoffice-materia';

@NgModule({
  declarations: [
    BackofficeMateriaPage,
  ],
  imports: [
    IonicPageModule.forChild(BackofficeMateriaPage),
  ],
})
export class BackofficeMateriaPageModule {}
