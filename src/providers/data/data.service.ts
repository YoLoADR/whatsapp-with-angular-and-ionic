import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Profile } from "../../models/profile/profile.interface";
// (1) Interface / Model par default pour un User Firebase
// C'est la raison pour laquelle on a renomer user par profile lors de ce commit, cela permet de mieux dissocier les deux
import { User } from 'firebase/app';
import {  database } from 'firebase';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AuthService } from "../auth/auth.service";
/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataService {

  //Un objet ~-> un item
  profileObject: FirebaseObjectObservable<Profile>
  //Une liste ~-> une liste d'items
  profileList: FirebaseListObservable<Profile[]>

  constructor(private authService: AuthService,
    private angularFireDatabase: AngularFireDatabase) {}

  //Pour retourner qu'une réponse avec deux Observable on utilise mergeMap =~  (2 x .then) = 1 mergeMap
  getAuthenticatedUserProfile(){
    return this.authService.getAuthenticateUser()
      .map(user => user.uid)
      .mergeMap(authId => this.angularFireDatabase.object(`/profiles/${authId}`))
      .take(1)
  }

  getProfile(user: User){
    this.profileObject = this.angularFireDatabase.object(`/profiles/${user.uid}`, { preserveSnapshot: true});
    //Take fais partie de rxjs ~ subscribe 1
    return this.profileObject.take(1);
  }

  async saveProfile(user: User, profile: Profile){
    this.profileObject = this.angularFireDatabase.object(`/profiles/${user.uid}`);
    try{
      await this.profileObject.set(profile);
      return true;
    }
    catch(err){
      console.error(err);
      return false;
    }
  }

  searchUser(firstName: string){
    const query = this.angularFireDatabase.list('profiles',{
      query : {
        orderByChild: 'firstName',
        equalTo: firstName
      }
    });
    //Take fais partie de rxjs ~ subscribe 1
    return query.take(1)
  }

  setUserOnline(profile: Profile){
    const ref = database().ref(`online-users/${profile.$key}`)

    try{
      ref.update({...profile});
      ref.onDisconnect().remove;
    }
    catch(e){
      console.error(e);
    }
  }

  getOnlineUsers(): FirebaseListObservable<Profile[]>{
    return this.angularFireDatabase.list(`online-users`);
  }
}


// (1) Interface / Model par default pour un User Firebase
/*
{
  'uid-1': {
    firstName: 'Paul',
    lastName : 'Halliday',
    ...
}
  }*/
