import { Component, OnInit } from '@angular/core';
import { DataService } from "../../providers/data/data.service";
import { FirebaseListObservable } from "angularfire2/database";
import { Profile } from "../../models/profile/profile.interface";
import { NavController } from "ionic-angular";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'online-users',
  templateUrl: 'online-users.html'
})
export class OnlineUsersComponent implements OnInit {
  ngOnInit(): void {
    this.setOnlineUser();
    this.getOnlineUsers();
  }

  userList: FirebaseListObservable<Profile[]>;

  constructor(private dataService: DataService, private navController: NavController) {
  }

  //Chaque fois qu'un utilisateur se connecte à l'application la base de donnée des "utilisateurs connectés" se met à jour
  setOnlineUser(){
    this.dataService.getAuthenticatedUserProfile().subscribe(profile => {
      console.log("profile", profile);
      this.dataService.setUserOnline(profile);
    });
  }

  getOnlineUsers(){
    this.userList = this.dataService.getOnlineUsers();
    console.log("userList", this.userList);
  }

  openChat(profile: Profile){
    this.navController.push('MessagePage', { profile })
  }

}
