import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatService } from "../../providers/chat/chat.service";
import { Channels } from "../../models/channels/channels.interface";
import { FirebaseListObservable } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the ChannelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: FirebaseListObservable<Channels[]>;

  constructor(
    private chatService: ChatService,
    private alertController: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewWillLoad() {
   this.getChannels();
  }

  // handler permet de créer une fonction - data.channelName => name: 'channelName' (de l'input)
  showAddChannelDialog(){
    this.alertController.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chatService.addChannel(data.channelName)
          }
        }
      ]
    }).present();
  }

  getChannels(){
    this.channelList = this.chatService.getChannelListRef();
  }

  selectChannel(channel: Channels){
    this.navCtrl.push('ChannelChatPage', { channel })
  }

}
