import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from './../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";
import { NavController } from "ionic-angular";

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

  account = {} as Account;

  //On vas poser un écouteur sur le résultat de la méthode .auth.signInWithEmailAndPassword()
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private angularFireAuth: AngularFireAuth,
  private navController: NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  // Je mets async car je vais utiliser une promesss
  //(+)  async try await catch = Magnifique !
  async login(){
    try {
      const result: LoginResponse = {
        result: await this.angularFireAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      // On attend (await) le résultat grace à await, dès qu'on l'a reçu on continu et faisons appel à this.loginStatus() (qui est un enfant qui hérite d'EventEmitter) et qui a pour but de crier dans l'application result - on peut voir ça comme un guetteur ou un agent de sécurité télésurveillance, qui lance un signal pour prévenir ceux à qui ça porte un interet -> un patroulleur sécuritas, une ambulance, les pompiers ou la police. Font partie des intervenants ceux qui on un téléphone pour être à l'écoute d'un signal / évenement @Output() pour intervenir (déclencher à leur tour une action)
      /**
       * this.auFeuStatus.emit(adresse) => PompierComponent
       * this.unMaladeStatus.emit(adresse) => AmbulanceComponent
       * this.unVoleurStatus.emit(adresse) => PolicierComponent
       * */
      this.loginStatus.emit(result);

      // On veut rendre les commandes à la page qui contient de se templateComponent pour quelle puissse par exemple adpater la navigation ou afficher un message en fonction du resultat de l'authentification
      /**
       * this.navigateToPage('TabsPage');
       * this.toastCrontroller.create({
       * message: "Vous êtes connecté",
       * duration: 3000
       * }).present();
       */

    }
    catch(err){
      console.error(err);
      const error: LoginResponse = {
        error: err
      }
      this.loginStatus.emit(error);
    }
  }

  navigateToRegisterPage(){
    this.navController.push('RegisterPage')
  }

    // Bonne pratique pour faire une fonction réutilisable -> exemple : (click)="navigateToPage('RegisterPage')"
  // (!) Si la personne click sur "login" la page suivantes (InboxPage) a un "back boutton" alors qu'il devrait juste avoir un boutton logout -> pour cela in va créer une fonction
  // la page suivantes est InboxPage car on la défini comme première root dans les Tabs de TabsPage - Tabs => Bottom Navigation App
  // navigateToPage(pageName: string){
  //   /*
  //     if(pageName === 'TabsPage'){
  //       this.navCtrl.setRoot(pageName);
  //     }else {
  //       this.navCtrl.push(pageName)
  //     }
  //   */
  //   // Si la page est égale à TabsPage (suite à un click sur login) -> on le redirige vers une page qui devient la page Root
  //   // Sinon on le redirige vers la page selectionné (par default)
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);



  // }

}
