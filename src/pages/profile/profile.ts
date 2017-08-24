import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";
import { AuthService } from "../../providers/auth/auth.service";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  // le component (ProfileViewComponent) qui se charge de récuperer le profile et de l'afficher, le partage avec la page tout entière (ProfilePage)
  getExistingProfile(profile){
    this.existingProfile = profile;
  }

  navigateToEditProfilePage(){
    this.navCtrl.push('EditProfilePage', { existingProfile : this.existingProfile });
  }

  signOut(){
    this.authService.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

}
