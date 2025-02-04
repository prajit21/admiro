import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-validation-form',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './validation-form.component.html',
    styleUrl: './validation-form.component.scss'
})
export class ValidationFormComponent {

  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }


}
