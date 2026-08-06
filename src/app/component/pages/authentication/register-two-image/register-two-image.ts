import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonRegisterForm } from '../common-register-form/common-register-form';

@Component({
  selector: 'app-register-two-image',
  imports: [RouterModule, CommonRegisterForm],
  templateUrl: './register-two-image.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './register-two-image.scss',
})
export class RegisterTwoImage {}
