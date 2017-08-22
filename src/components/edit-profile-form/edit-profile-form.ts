import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Profile } from "../../models/profile/profile.interface";
import { AuthService } from "../../providers/auth/auth.service";
import { Subscription } from 'rxjs';
import { DataService } from "../../providers/data/data.service";
import { User } from 'firebase/app';
/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
    if(!this.profile){
      this.profile = {} as Profile;
    }
  }
  ngOnDestroy(): void {
    this.authentificateUser$.unsubscribe();
  }
  @Output() saveProfileResult: EventEmitter<Boolean>

  text: string;
  @Input() profile : Profile;

  //(!)
  // Convention Style Guide de mettre un $ quand il cela concerne un observable
  private authentificateUser$ : Subscription;
  private authentificateUser : User;

  constructor(private authService: AuthService, private dataService: DataService) {
    this.saveProfileResult = new EventEmitter();
    // (?) Je sais pas pourquoi je dois le stocker dans une variable de type Subscription
    this.authentificateUser$ = this.authService.getAuthenticateUser().subscribe((user: User) => {
      this.authentificateUser = user;
    });

  }

  async saveProfile(){
    if(this.authentificateUser){
      this.profile.email = this.authentificateUser.email;
      const result = await this.dataService.saveProfile(this.authentificateUser, this.profile);

      // On signal dans l'application qu'un utilisateur a été enregistré
      this.saveProfileResult.emit(result);
    }
  }

}
