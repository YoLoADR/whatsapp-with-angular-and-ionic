import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Channels } from "../../models/channels/channels.interface";

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatService {

  constructor(public angularFireDatabase: AngularFireDatabase) {
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

}
