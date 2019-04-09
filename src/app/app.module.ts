import { BackofficeMenuModule } from './../pages/backoffice/backoffice-menu/backoffice-menu.module';
import { Api } from './../providers/api/api';
import { Task } from './../pages/task/task';
import { User } from './../pages/user/user';
import { Login } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { Search } from '../pages/search/search';
import { SettingTask } from '../pages/setting-task/setting-task';


@NgModule({
  declarations: [
    MyApp,
    Home,
    Login,
    User,
    Task,
    Search,
    SettingTask
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
    Home,
    Login,
    User,
    Task,
    Search,
    SettingTask
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api
  ]
})
export class AppModule {}
