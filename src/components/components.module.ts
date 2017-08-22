import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ProfileViewComponent } from './profile-view/profile-view';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent
  ],
  imports: [
    IonicPageModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent
  ]
})
export class ComponentsModule {}
