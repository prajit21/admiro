import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCategoiesComponent } from './new-categoies/new-categoies.component';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrl: './products-categories.component.scss'
})
export class ProductsCategoriesComponent {

  @Output() activeSteps = new EventEmitter<number>();

  public items = [];
  public activeStep: number = 3;
  public validate: boolean;
  public htmlContent = '';
  
  constructor(private modalService: NgbModal) { }

  myForm = new FormGroup({
    product: new FormControl('',Validators.required),
    productStatus: new FormControl('',Validators.required),
    addTag :new FormControl('',Validators.required),
    date :new FormControl('',Validators.required),

 });

 next(myForm:FormGroup) {
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
    const model = this.modalService.open( NewCategoiesComponent, { size: 'lg' });
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

}
