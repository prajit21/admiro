import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrl: './validation-form.component.scss'
})
export class ValidationFormComponent {

  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }


}
