import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";
import { Messages } from "../../models/messages/messages.interface";
import { AuthService } from "../../providers/auth/auth.service";
import { DataService } from "../../providers/data/data.service";
import { ChatService } from "../../providers/chat/chat.service";
import { Observable } from "rxjs/Observable";

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
  messageList: Observable<Messages[]>;
  userId: string;
  userProfile: Profile;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private chatService: ChatService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log('profile', this.navParams.get('profile'));
    // (1) Récupère l'utilisateur sélectionné via un click sur un un item
    this.selectedProfile = this.navParams.get('profile');
    // (2) Récupère un utilisateur via authentification au démarrage de l'application
    this.dataService.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.userId = profile.$key;
    });

    this.messageList = this.chatService.getChats(this.selectedProfile.$key);
  }

  async sendMessage(content: string){
    try {
      const message: Messages = {
        userFromId: this.userProfile.$key,
        userFromProfile: {
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        },
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        content: content
      }
      console.log("messsgae envoyé", message);
      this.chatService.sendChat(message);
    }
    catch(e){
      console.error(e);
    }
  }



}
