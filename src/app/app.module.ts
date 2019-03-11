import { BackofficeParentPage } from './../pages/backoffice/backoffice-parent/backoffice-parent';
import { BackofficeTeacherPage } from './../pages/backoffice/backoffice-teacher/backoffice-teacher';
import { BackofficeStudentPage } from './../pages/backoffice/backoffice-student/backoffice-student';


import { TaskPage } from './../pages/task/task';
import { UserPage } from './../pages/user/user';
import { BackofficeMenuPage } from './../pages/backoffice/backoffice-menu/backoffice-menu';
import { BackofficeMateriaPage } from './../pages/backoffice/backoffice-materia/backoffice-materia';
import { BackofficeClassPage } from './../pages/backoffice/backoffice-class/backoffice-class';
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { DiarioApiProvider } from '../providers/diario-api/diario-api';
import { BackofficeUserPage } from '../pages/backoffice/backoffice-user/backoffice-user';
import { SearchPage } from '../pages/search/search';
import { SettingTaskPage } from '../pages/setting-task/setting-task';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    BackofficeClassPage,
    BackofficeMateriaPage,
    BackofficeMenuPage,
    BackofficeUserPage,
    UserPage,
    TaskPage,
    SearchPage,
    SettingTaskPage,
    BackofficeStudentPage,
    BackofficeTeacherPage,
    BackofficeParentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    BackofficeClassPage,
    BackofficeMateriaPage,
    BackofficeMenuPage,
    BackofficeUserPage,
    UserPage,
    TaskPage,
    SearchPage,
    SettingTaskPage,
    BackofficeStudentPage,
    BackofficeTeacherPage,
    BackofficeParentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiarioApiProvider
  ]
})
export class AppModule {}
