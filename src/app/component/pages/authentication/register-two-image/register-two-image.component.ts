import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonRegisterFormComponent } from '../common-register-form/common-register-form.component';

@Component({
  selector: 'app-register-two-image',
  standalone: true,
  imports: [CommonModule,RouterModule,CommonRegisterFormComponent],
  templateUrl: './register-two-image.component.html',
  styleUrl: './register-two-image.component.scss'
})
export class RegisterTwoImageComponent {

}
