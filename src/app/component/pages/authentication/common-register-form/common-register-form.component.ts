import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-register-form',
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
