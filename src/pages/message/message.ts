import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";
import { Messages } from "../../models/messages/messages.interface";
import { MESSAGE_LIST } from "../../mocks/messages/messages";
import { AuthService } from "../../providers/auth/auth.service";

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile;
  messageList: Messages[];
  userId: string;

  constructor(
    private authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.messageList = MESSAGE_LIST;
  }

  ionViewWillLoad() {
    console.log('profile', this.navParams.get('profile'));
    // (1) Récupère l'utilisateur sélectionné via un click sur un un item
    this.selectedProfile = this.navParams.get('profile');
    // (2) Récupère un utilisateur via authentification au démarrage de l'application
    this.authService.getAuthenticateUser()
      .subscribe(auth => this.userId = auth.uid)
  }



}
