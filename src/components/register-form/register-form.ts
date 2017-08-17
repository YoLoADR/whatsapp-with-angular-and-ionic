import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from './../../models/account/account.interface';
import { ToastController } from 'ionic-angular';

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

  constructor(private toastCrontroller: ToastController,  private angularFireAuth: AngularFireAuth) {
    console.log('Hello RegisterFormComponent Component');
    this.text = 'Hello World';
  }

  async register(){
    try{
      const result = await this.angularFireAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toastCrontroller.create({
        message: "Account créée avec succès",
        duration: 3000
      }).present();

      console.log(result);
    }
    catch(err){
      console.error(err);
      this.toastCrontroller.create({
        message: err.message,
        duration: 3000
      }).present();
    }
  }

}
