import { Component, output, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { NewCategoies } from './new-categoies/new-categoies';

@Component({
  selector: 'app-products-categories',
  imports: [FormsModule, ReactiveFormsModule, TagInputModule],
  templateUrl: './products-categories.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './products-categories.scss',
})
export class ProductsCategories {
  readonly activeSteps = output<number>();

  public items = [];
  public activeStep: number = 3;
  public validate: boolean;
  public htmlContent = '';

  private modalService = inject(NgbModal);

  myForm = new FormGroup({
    product: new FormControl('', Validators.required),
    productStatus: new FormControl('', Validators.required),
    addTag: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  next(_myForm: FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get product() {
    return this.myForm.get('product');
  }

  get addTag() {
    return this.myForm.get('addTag');
  }

  get date() {
    return this.myForm.get('date');
  }

  get productStatus() {
    return this.myForm.get('productStatus');
  }

  newCategories() {
    this.modalService.open(NewCategoies, { size: 'lg' });
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
