import { StudentHomeModule } from './../pages/backoffice/student/student-home/student-home.module';
import { ClassroomHome } from './../pages/backoffice/classroom/classroom-menu/classroom-home';
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
    RegisterPage,
    LoginPage,
    UserPage,
    TaskPage,
    SearchPage,
    SettingTaskPage,
    ClassroomAdd,
    MatterAdd,
    ParentAdd,
    TeacherAdd,
    BackofficeMenu,
    ClassroomHome
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    StudentHomeModule
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
    MatterAdd,
    ParentAdd,
    TeacherAdd,
    BackofficeMenu,
    ClassroomHome
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiarioApiProvider,
    Api,
    ClassroomOptions,
    MatterOptions,
    StudentOptions,
    TeacherOptions,
    ParentOptions
  ]
})
export class AppModule {}
