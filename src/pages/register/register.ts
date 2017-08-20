import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/login/login-response.interface";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private toastController: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }


  register(event: LoginResponse){
    console.log("Equipe d'intervention register() du batiment RegisterPage avons bien reçu le signal :", event);
    // event peut être égale à deux reponse différentes => soit {result: S} soit {error: O}
    if(!event.error){
      this.navCtrl.setRoot('ProfilePage');
      this.toastController.create({
        message: `Bienvenu ${event.result.email}`,
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
