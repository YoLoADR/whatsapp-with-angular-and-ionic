import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// (!) ne pas oublier de l'importer car il est utilser pas l'un de ses templateComponent
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPage } from './login';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule,
    AngularFireAuthModule
  ],
})
export class LoginPageModule {}
