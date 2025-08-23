import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-vaildation',
  imports: [CommonModule, RouterModule, CommonLoginForm],
  templateUrl: './login-vaildation.html',
  styleUrl: './login-vaildation.scss',
})
export class LoginVaildation {}
