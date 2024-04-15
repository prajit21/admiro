import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { CommonLoginFormComponent } from './common-login-form/common-login-form.component';
import { CommonRegisterFormComponent } from './common-register-form/common-register-form.component';
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

@NgModule({
  declarations: [
    CommonLoginFormComponent,
    CommonRegisterFormComponent,
    SimpleLoginComponent,
    LoginBgImgComponent,
    LoginImgTwoComponent,
    LoginVaildationComponent,
    LoginTooltipComponent,
    LoginSweetalertComponent,
    RegisterSimpleComponent,
    RegisterBgImageComponent,
    RegisterTwoImageComponent,
    UnloackUserComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
