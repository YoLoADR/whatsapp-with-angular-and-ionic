import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from './../../models/account/account.interface';
import { AuthService } from "../../providers/auth/auth.service";
import { LoginResponse } from "../../models/login/login-response.interface";

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  text: string;
  account = {} as Account;
  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private authService: AuthService) {
    // (!) Ne pas oublier après l'avoir typer plus haut de l'instancier
    this.registerStatus = new EventEmitter<LoginResponse>();
  }
  async register(){
    const result = await this.authService.createUserWithEmailAndPassword(this.account);
    this.registerStatus.emit(result);
  }

}
