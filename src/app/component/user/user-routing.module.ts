import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users-profile',
        component: UsersProfileComponent,
        data: {
          title: "User Profile",
          breadcrumb: "User Profile",
        }
      },
      {
        path: 'profile-edit',
        component: UsersEditComponent,
        data: {
          title: "Edit Profile",
          breadcrumb: "Edit Profile",
        }
      },
      {
        path: 'users-cards',
        component:UsersCardsComponent,
        data: {
          title: "User Cards",
          breadcrumb: "User Cards",
        }
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { 

}
