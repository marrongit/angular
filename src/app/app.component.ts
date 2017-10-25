import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {HomePage} from "../pages/home/home";
import {PerfilPage} from "../pages/perfil/perfil";
import {ContactPage} from "../pages/contact/contact";
import {AboutPage} from "../pages/about/about";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild('NAV') nav: Nav;
   rootPage:any = TabsPage;
  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
        {titulo: "Inicio", component: HomePage, icon: "home"},
        {titulo: "Perfil", component: PerfilPage, icon: "contact"},
        {titulo: "Contactenos", component: ContactPage, icon: "call"},
        {titulo: "Acerca de", component: AboutPage, icon: "information-circle"}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
      this.nav.setRoot(page);
  }
}

