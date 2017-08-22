import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { LoginResponse } from "../../models/login/login-response.interface";
import { DataService } from "../../providers/data/data.service";
import { User } from "firebase/app";

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

  constructor(private dataService: DataService, private navCtrl: NavController,
  private toastController: ToastController) {
  }

  login(event: LoginResponse){
    console.log("Equipe d'intervention login() du batiment LoginPage avons bien reçu le signal :", event);
    // event peut être égale à deux reponse différentes => soit {result: S} soit {error: O}
    if(!event.error){
      this.toastController.create({
        message: `Vous êtes connecté via ${event.result.email}`,
        duration: 3000
       }).present();

       /**
        * Au debut l'utilisateur se connecte avec son mail et son mots de passe - rien de plus, dans ce cas la on lui demande d'éditer son profile (nom, prenom ...)
        * Si le profile existe deja on le redirige vers TabsPage, sinon on lui propose d'éditer son profil (pour avoir plus d'information)
        */
       this.dataService.getProfile(<User>event.result).subscribe(profile => {
         console.log("profile", profile);
        profile.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
       });

    }else if (event.error){
      this.toastController.create({
        message: event.error.message,
        duration: 3000
       }).present();
    }


  }

}
