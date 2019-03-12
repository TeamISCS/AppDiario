import { MatterOptions } from './../pages/backoffice/matter/matter-options';
import { MatterAddPage } from './../pages/backoffice/matter/matter-add/matter-add';
import { ClassroomAdd } from './../pages/backoffice/classroom/classroom-add/classroom-add';
import { ClassroomOptions } from './../pages/backoffice/classroom/classroom-options';
import { Api } from './../providers/api/api';
import { TaskPage } from './../pages/task/task';
import { UserPage } from './../pages/user/user';
import { BackofficeMenuPage } from './../pages/backoffice/backoffice-menu/backoffice-menu';
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DiarioApiProvider } from '../providers/diario-api/diario-api';
import { SearchPage } from '../pages/search/search';
import { SettingTaskPage } from '../pages/setting-task/setting-task';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    UserPage,
    TaskPage,
    SearchPage,
    SettingTaskPage,
    ClassroomAdd,
    MatterAddPage,
    BackofficeMenuPage
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
    UserPage,
    TaskPage,
    SearchPage,
    SettingTaskPage,
    ClassroomAdd,
    MatterAddPage,
    BackofficeMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiarioApiProvider,
    Api,
    ClassroomOptions,
    MatterOptions
  ]
})
export class AppModule {}
