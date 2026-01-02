
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  public router = inject(Router);

  public show: boolean = false;
  public loginForm: FormGroup;

  constructor() {
    const userData = localStorage.getItem('user');
    if (userData?.length != null) {
      this.router.navigate(['/dashboard/default']);
    }

    this.loginForm = this.fb.group({
      email: ['Test@gmail.com', [Validators.required, Validators.email]],
      password: ['test123', Validators.required],
    });
  }
  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    if (
      this.loginForm.value['email'] == 'Test@gmail.com' &&
      this.loginForm.value['password'] == 'test123'
    ) {
      let user = {
        email: 'Test@gmail.com',
        password: 'test123',
        name: 'test user',
      };

      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/dashboard/default']);
    }
  }
}
