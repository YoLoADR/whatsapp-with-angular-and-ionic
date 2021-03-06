import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from "../providers/auth/auth.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {

    //Si l'utilisateur est deja connecter la home page n'est plus login mais inbox (TabsPage car elle redirige vers inboxPage)
    this.authService.getAuthenticateUser().subscribe(auth =>
      !auth ?
      this.rootPage = 'LoginPage' :
      this.rootPage = 'InboxPage'
    );

    platform.ready().then(() => {
      //this.rootPage = 'LoginPage';
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

