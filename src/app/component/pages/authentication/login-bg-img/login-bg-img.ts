import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-bg-img',
  imports: [CommonModule, RouterModule, CommonLoginForm],
  templateUrl: './login-bg-img.html',
  styleUrl: './login-bg-img.scss',
})
export class LoginBgImg {}
