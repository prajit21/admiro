import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-common-login-form',
    imports: [CommonModule, RouterModule],
    templateUrl: './common-login-form.component.html',
    styleUrl: './common-login-form.component.scss'
})
export class CommonLoginFormComponent {

  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }


}
