import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-common-register-form',
    imports: [CommonModule, RouterModule],
    templateUrl: './common-register-form.component.html',
    styleUrl: './common-register-form.component.scss'
})
export class CommonRegisterFormComponent {

  @Input() center: boolean = true;
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }

}
