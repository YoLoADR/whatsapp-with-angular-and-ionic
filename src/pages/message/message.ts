import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";
import { Messages } from "../../models/messages/messages.interface";
import { MESSAGE_LIST } from "../../mocks/messages/messages";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messageList = MESSAGE_LIST;
  }

  ionViewWillLoad() {
    console.log('profile', this.navParams.get('profile'));
    this.selectedProfile = this.navParams.get('profile');
  }



}
