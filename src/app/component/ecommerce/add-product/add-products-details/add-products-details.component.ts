import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products-details',
  templateUrl: './add-products-details.component.html',
  styleUrl: './add-products-details.component.scss'
})
export class AddProductsDetailsComponent {

  public validate: boolean = false;
  public activeStep: number = 1;


  @Output() activeSteps = new EventEmitter<number>();

  myForm = new FormGroup({
    productTitle: new FormControl('',Validators.required),
  });

  next(myForm:FormGroup) {
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
