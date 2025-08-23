import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLoginForm } from '../common-login-form/common-login-form';

@Component({
  selector: 'app-login-img-two',
  imports: [CommonModule, RouterModule, CommonLoginForm],
  templateUrl: './login-img-two.html',
  styleUrl: './login-img-two.scss',
})
export class LoginImgTwo {}
