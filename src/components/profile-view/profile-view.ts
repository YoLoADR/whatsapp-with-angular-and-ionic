import { Component, OnInit } from '@angular/core';
import { DataService } from "../../providers/data/data.service";
import { AuthService } from "../../providers/auth/auth.service";
import { User } from "firebase/app";
import { Profile } from "../../models/profile/profile.interface";
import { LoadingController, Loading } from "ionic-angular";

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit{

  text: string;
  userProfile: Profile;
  loader: Loading;

  constructor(private dataService: DataService, private authService: AuthService, private loading: LoadingController) {
    this.loader = this.loading.create({
      content: "Chargement du profile ..."
    });
  }

  ngOnInit(): void{
    this.loader.present();
    //Récupère l'utilisateur qui s'est connecté via son mail
    this.authService.getAuthenticateUser().subscribe((user: User) => {
      //Récupère le profile via l'url `/profiles/${user.uid}`
      this.dataService.getProfile(user).subscribe((profile) =>{
        this.userProfile = <Profile>profile.val();
        this.loader.dismiss();
      })
    })
  }

}
