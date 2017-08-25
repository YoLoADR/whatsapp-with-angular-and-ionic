import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channels } from "../../models/channels/channels.interface";
import { ChatService } from "../../providers/chat/chat.service";
import { Observable } from "rxjs/Observable";
import { FirebaseListObservable } from "angularfire2/database";
import { ChannelMessage } from "../../models/channels/channel-message.interface";

/**
 * Generated class for the ChannelChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channels;
  channelMessages: FirebaseListObservable<ChannelMessage[]>;

  constructor(
    private chatService: ChatService,
    public navCtrl: NavController,
     public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages = this.chatService.getChannelChatRef(this.channel.$key);
    console.log("channelMessages", this.channelMessages);
  }

  sendMessage(content : string){
    let channelMessage: ChannelMessage = {
      content: content
    }

    this.chatService.addChannelMessage(this.channel.$key, channelMessage.content);

  }

}
