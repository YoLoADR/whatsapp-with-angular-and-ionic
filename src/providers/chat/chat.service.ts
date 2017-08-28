import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';

import { AuthService } from "../auth/auth.service";
import { Messages } from "../../models/messages/messages.interface";
import { Channels } from "../../models/channels/channels.interface";
import { ChannelMessage } from "../../models/channels/channel-message.interface";

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatService {

  constructor(
    public angularFireDatabase: AngularFireDatabase,
    private authService: AuthService,
  ) {
  }


  // Dans une nouvelle base de donnée quand nome "channel-names" on ajoute grace à cette fonction des "clés : valeurs"
    /*
    channel-names :
      -Kewjjwai221 :
        name: 'Ionic'
      -Kewjjwai22321 :
        name: 'Angular'
    */
  addChannel(channelName: string){
    this.angularFireDatabase.list('channel-names').push({ name: channelName });
  }

  getChannelListRef(): FirebaseListObservable<Channels>{
    return this.angularFireDatabase.list('channel-names');
  }

  getChannelChatRef(channelKey: string): FirebaseListObservable<ChannelMessage[]>{
    return this.angularFireDatabase.list(`channels/${channelKey}`);
  }

  async addChannelMessage(channelKey: string, channelMessage: string){
    await this.angularFireDatabase.list(`channels/${channelKey}`).push({ content: channelMessage });
  }

  async sendChat(message: Messages) {
    try{
      await this.angularFireDatabase.list('/messages/').push(message)
    }
    catch(e){
      console.error(e);
    }
  }

  getChats(userTwoId: string){
    return this.authService.getAuthenticateUser()
      .map(auth => auth.uid)
      .mergeMap(uid => this.angularFireDatabase.list(`/user-messages/${uid}/${userTwoId}`))
      .mergeMap(chats => {
        return Observable.forkJoin(
          chats.map(chat => this.angularFireDatabase.object(`/messages/${chat.$key}`)
          .first()),
          (...vals :Messages[]) => {
          return vals;
          }
        )
      })
  }

  // Cette methode à un rapport avec le local storage
  getLastMessagesForUser(): Observable<Messages[]>{
    return this.authService.getAuthenticateUser()
      .map(auth => auth.uid)
      .mergeMap(authId => this.angularFireDatabase.list(`/last-messages/${authId}`))
      .mergeMap(messageIds => {
        return Observable.forkJoin(
          messageIds.map(message => {
            return this.angularFireDatabase.object(`/messages/${message.key}`)
            .first()
          }),
          (...values) => {
            return values;
          }
        )
      })
  }
}
