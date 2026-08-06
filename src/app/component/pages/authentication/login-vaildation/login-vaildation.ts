import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-vaildation',
  imports: [RouterModule, CommonLoginForm],
  templateUrl: './login-vaildation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login-vaildation.scss',
})
export class LoginVaildation {}
