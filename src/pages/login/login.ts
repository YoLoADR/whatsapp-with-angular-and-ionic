import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/login/login-response.interface";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController,
  private toastController: ToastController) {
  }

  login(event: LoginResponse){
    console.log("Equipe d'intervention login() du batiment LoginPage avons bien reçu le signal :", event);
    // event peut être égale à deux reponse différentes => soit {result: S} soit {error: O}
    if(!event.error){
      this.navCtrl.setRoot('EditProfilePage');
      this.toastController.create({
        message: `Vous êtes connecté via ${event.result.email}`,
        duration: 3000
       }).present();

    }else if (event.error){
      this.toastController.create({
        message: event.error.message,
        duration: 3000
       }).present();
    }


  }

}
