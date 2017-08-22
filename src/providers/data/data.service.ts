import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Profile } from "../../models/profile/profile.interface";
// (1) Interface / Model par default pour un User Firebase
// C'est la raison pour laquelle on a renomer user par profile lors de ce commit, cela permet de mieux dissocier les deux
import { User } from 'firebase/app';
import 'rxjs/add/operator/take';
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

  constructor(private angularFireDatabase: AngularFireDatabase) {}

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
