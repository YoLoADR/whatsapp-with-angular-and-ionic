import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginResponse } from "../../models/login/login-response.interface";
import { Account } from './../../models/account/account.interface';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  async createUserWithEmailAndPassword(account: Account){
    try {
      return <LoginResponse> {
        result: await this.angularFireAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }
    catch(err){
      return <LoginResponse> {
        error: err
      }
    }
  }

  async signInWithEmailAndPassword(account: Account){
    try {
      return <LoginResponse> {
        result: await this.angularFireAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }
    catch(err){
      return <LoginResponse> {
        error: err
      }
    }
  }

}
