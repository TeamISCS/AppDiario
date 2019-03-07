
import { HomePage } from './../pages/home/home';
import { BackofficeMenuPage } from './../pages/backoffice/backoffice-menu/backoffice-menu';
import { BackofficeMateriaPage } from './../pages/backoffice/backoffice-materia/backoffice-materia';
import { BackofficeClassPage } from './../pages/backoffice/backoffice-class/backoffice-class';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = BackofficeMenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

