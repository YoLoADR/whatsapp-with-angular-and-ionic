import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

import { Account } from './../../models/account/account.interface';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  text: string;
  account = {} as Account;

  constructor(private toastCrontroller: ToastController, private angularFireAuth: AngularFireAuth, private navCtrl: NavController) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }

  // Je mets async car je vais utiliser une promesss
  //(+)  async try await catch = Magnifique !
  async login(){
    try {
      const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      console.log("result", result);
      this.navigateToPage('TabsPage');
      this.toastCrontroller.create({
        message: "Vous êtes connecté",
        duration: 3000
      }).present();
    }
    catch(err){
      console.error(err);
      this.toastCrontroller.create({
        message: err.message,
        duration: 3000
      }).present();
    }
  }

    // Bonne pratique pour faire une fonction réutilisable -> exemple : (click)="navigateToPage('RegisterPage')"
  // (!) Si la personne click sur "login" la page suivantes (InboxPage) a un "back boutton" alors qu'il devrait juste avoir un boutton logout -> pour cela in va créer une fonction
  // la page suivantes est InboxPage car on la défini comme première root dans les Tabs de TabsPage - Tabs => Bottom Navigation App
  navigateToPage(pageName: string){
    /*
      if(pageName === 'TabsPage'){
        this.navCtrl.setRoot(pageName);
      }else {
        this.navCtrl.push(pageName)
      }
    */
    // Si la page est égale à TabsPage (suite à un click sur login) -> on le redirige vers une page qui devient la page Root
    // Sinon on le redirige vers la page selectionné (par default)
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);



  }

}
