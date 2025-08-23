import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [CommonModule, RouterModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss',
})
export class ForgetPassword {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
