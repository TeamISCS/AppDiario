import { BackofficeMenuModule } from './../pages/backoffice/backoffice-menu/backoffice-menu.module';
import { MatterHomePage } from './../pages/backoffice/matter/matter-home/matter-home';
import { TeacherHomePage } from './../pages/backoffice/teacher/teacher-home/teacher-home';
import { StudentHomeModule } from './../pages/backoffice/student/student-home/student-home.module';
import { ParentOptions } from './../pages/backoffice/parent/parent-options';
import { TeacherAdd } from './../pages/backoffice/teacher/teacher-add/teacher-add';
import { ParentAdd } from './../pages/backoffice/parent/parent-add/parent-add';
import { MatterOptions } from './../pages/backoffice/matter/matter-options';
import { MatterAdd } from './../pages/backoffice/matter/matter-add/matter-add';
import { ClassroomAdd } from './../pages/backoffice/classroom/classroom-add/classroom-add';
import { ClassroomOptions } from './../pages/backoffice/classroom/classroom-options';
import { Api } from './../providers/api/api';
import { TaskPage } from './../pages/task/task';
import { UserPage } from './../pages/user/user';
import { BackofficeMenu } from './../pages/backoffice/backoffice-menu/backoffice-menu';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { DiarioApiProvider } from '../providers/diario-api/diario-api';
import { SearchPage } from '../pages/search/search';
import { SettingTaskPage } from '../pages/setting-task/setting-task';
import { StudentAdd } from '../pages/backoffice/student/student-add/student-add';
import { StudentHome } from '../pages/backoffice/student/student-home/student-home';
import { StudentOptions } from '../pages/backoffice/student/student-options';
import { TeacherOptions } from '../pages/backoffice/teacher/teacher-options';


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
    DiarioApiProvider,
    Api
  ]
})
export class AppModule {}
