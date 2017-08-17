import { Component } from '@angular/core';
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

  text: string;

  constructor(private navCtrl: NavController) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
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
