import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialAppComponent } from './social-app.component';

const routes: Routes = [
  {
    path:'',
    component:SocialAppComponent,
    data: {
      title: "Soical App",
      breadcrumb: "Soical App",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialAppRoutingModule { }
