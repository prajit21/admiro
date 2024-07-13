import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
  selector: 'app-login-bg-img',
  standalone: true,
  imports: [CommonModule,RouterModule,CommonLoginFormComponent],
  templateUrl: './login-bg-img.component.html',
  styleUrl: './login-bg-img.component.scss'
})
export class LoginBgImgComponent {

}
