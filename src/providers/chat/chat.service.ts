import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from "angularfire2/database";

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatService {

  constructor(public angularFireDatabase: AngularFireDatabase) {
  }

  addChannel(channelName: string){
    // Dans une nouvelle base de donnée quand nome "channel-names" on ajoute grace à cette fonction des "clés : valeurs"
    /*
    channel-names :
      -Kewjjwai221 :
        name: 'Ionic'
      -Kewjjwai22321 :
        name: 'Angular'
    */
    this.angularFireDatabase.list('/channel-names/').push({ name: channelName });
  }

}
