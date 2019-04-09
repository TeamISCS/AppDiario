import { BackofficeMenuModule } from './../pages/backoffice/backoffice-menu/backoffice-menu.module';
import { Api } from './../providers/api/api';
import { TaskPage } from './../pages/task/task';
import { UserPage } from './../pages/user/user';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { SearchPage } from '../pages/search/search';
import { SettingTaskPage } from '../pages/setting-task/setting-task';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UserPage,
    TaskPage,
    SearchPage,
    SettingTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    BackofficeMenuModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UserPage,
    TaskPage,
    SearchPage,
    SettingTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api
  ]
})
export class AppModule {}
