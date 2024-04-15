import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { LoginBgImgComponent } from './login-bg-img/login-bg-img.component';
import { LoginImgTwoComponent } from './login-img-two/login-img-two.component';
import { LoginVaildationComponent } from './login-vaildation/login-vaildation.component';
import { LoginTooltipComponent } from './login-tooltip/login-tooltip.component';
import { LoginSweetalertComponent } from './login-sweetalert/login-sweetalert.component';
import { RegisterSimpleComponent } from './register-simple/register-simple.component';
import { RegisterBgImageComponent } from './register-bg-image/register-bg-image.component';
import { RegisterTwoImageComponent } from './register-two-image/register-two-image.component';
import { UnloackUserComponent } from './unloack-user/unloack-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'simple',
        component: SimpleLoginComponent,
      },
      {
        path: 'image-one',
        component: LoginBgImgComponent,
      },
      {
        path: 'image-two',
        component: LoginImgTwoComponent,
      },
      {
        path: 'validation',
        component:LoginVaildationComponent,
      },
      {
        path: 'tooltip',
        component: LoginTooltipComponent,
      },
      {
        path: 'sweetalert',
        component: LoginSweetalertComponent,
      },
      {
        path: 'register-simple',
        component: RegisterSimpleComponent,
      },
      {
        path: 'register-image-one',
        component:  RegisterBgImageComponent,
      },
      {
        path: 'register-image-two',
        component: RegisterTwoImageComponent,
      },
      {
        path: 'unlock-user',
        component: UnloackUserComponent,
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'maintenance',
        component: MaintenanceComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
