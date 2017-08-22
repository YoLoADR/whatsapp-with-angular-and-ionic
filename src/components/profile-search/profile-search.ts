import { Component } from '@angular/core';
import { DataService } from "../../providers/data/data.service";
import { Profile } from "../../models/profile/profile.interface";

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  text: string;
  query: string;
  profileList: Profile[];

  constructor(private dataService: DataService) {
    console.log('Hello ProfileSearchComponent Component');
    this.text = 'Hello ProfileSearchComponent';
  }

  searchUser(query: string){
    this.dataService.searchUser(query).subscribe(profiles =>{
      this.profileList = profiles
      console.log("profileList", this.profileList);
    });
  }

}
