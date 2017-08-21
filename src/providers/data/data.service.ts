import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Profile } from "../../models/profile/profile.interface";
// (1) Interface / Model par default pour un User Firebase
// C'est la raison pour laquelle on a renomer user par profile lors de ce commit, cela permet de mieux dissocier les deux
import { User } from 'firebase/app';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>

  constructor(private angularFireDatabase: AngularFireDatabase) {}

  /**
   *
   *
   * @param {User} user
   * @param {Profile} profile
   * @returns
   * @memberof DataService
   */
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
