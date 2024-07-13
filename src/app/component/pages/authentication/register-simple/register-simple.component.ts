import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonRegisterFormComponent } from '../common-register-form/common-register-form.component';

@Component({
  selector: 'app-register-simple',
  standalone: true,
  imports: [CommonModule,RouterModule,CommonRegisterFormComponent],
  templateUrl: './register-simple.component.html',
  styleUrl: './register-simple.component.scss'
})
export class RegisterSimpleComponent {

}
