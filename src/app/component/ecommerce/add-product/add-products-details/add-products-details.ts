import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-products-details',
  imports: [CommonModule, AngularEditorModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-products-details.html',
  styleUrl: './add-products-details.scss',
})
export class AddProductsDetails {
  public validate: boolean = false;
  public activeStep: number = 1;

  readonly activeSteps = output<number>();

  myForm = new FormGroup({
    productTitle: new FormControl('', Validators.required),
  });

  next(_myForm: FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get productTitle() {
    return this.myForm.get('productTitle');
  }
}
