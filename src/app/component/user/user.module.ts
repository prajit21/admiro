import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UserProfile1Component } from './users-profile/user-profile1/user-profile1.component';
import { UserProfile2Component } from './users-profile/user-profile2/user-profile2.component';
import { UserProfile3Component } from './users-profile/user-profile3/user-profile3.component';
import { UserProfile4Component } from './users-profile/user-profile4/user-profile4.component';
import { UserProfile5Component } from './users-profile/user-profile5/user-profile5.component';
import { AddProjectsUploadComponent } from './users-edit/add-projects-upload/add-projects-upload.component';
import { EditProfileFormComponent } from './users-edit/edit-profile-form/edit-profile-form.component';
import { MyProfileComponent } from './users-edit/my-profile/my-profile.component';

@NgModule({
  declarations: [
    UsersProfileComponent,
    UsersCardsComponent,
    UsersEditComponent,
    UserProfile1Component,
    UserProfile2Component,
    UserProfile3Component,
    UserProfile4Component,
    UserProfile5Component,
    AddProjectsUploadComponent,
    EditProfileFormComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports:[
    UsersCardsComponent
  ]
})
export class UserModule { }
