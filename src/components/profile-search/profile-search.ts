import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() selectedProfile: EventEmitter<Profile>;
  query: string;
  profileList: Profile[];

  constructor(private dataService: DataService) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  searchUser(query: string){
    // Pour parser/unifier la requête utilisateur - .trim() permet de retirer les blancs en début et fin de chaîne.
    const trimmedQuery = query.trim();

    if(trimmedQuery === query){
      this.dataService.searchUser(query).subscribe(profiles =>{
        this.profileList = profiles
        console.log("profileList", this.profileList);
      });
    }
  }

  selectProfile(profile: Profile){
    this.selectedProfile.emit(profile);
  }

}
