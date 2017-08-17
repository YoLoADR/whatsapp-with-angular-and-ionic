import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class ComponentsModule {}