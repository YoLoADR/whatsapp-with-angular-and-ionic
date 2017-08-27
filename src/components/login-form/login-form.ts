import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from './../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";
import { NavController } from "ionic-angular";
import { AuthService } from "../../providers/auth/auth.service";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;

  //On vas poser un écouteur sur le résultat de la méthode .auth.signInWithEmailAndPassword()
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(
    private navController: NavController,
    private authService: AuthService
  ) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login(){
      const result = await this.authService.signInWithEmailAndPassword(this.account)
      this.loginStatus.emit(result);
  }

  navigateToRegisterPage(){
    this.navController.push('RegisterPage')
  }

}
