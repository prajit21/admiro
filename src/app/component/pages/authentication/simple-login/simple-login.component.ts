import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
  selector: 'app-simple-login',
  standalone: true,
  imports: [CommonModule,RouterModule,CommonLoginFormComponent],
  templateUrl: './simple-login.component.html',
  styleUrl: './simple-login.component.scss'
})
export class SimpleLoginComponent {

}
