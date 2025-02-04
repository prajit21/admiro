import { Component, Input } from '@angular/core';
import { staps } from '../../../../shared/data/ecommerce/add-product';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-products-form-stepe',
    imports: [CommonModule],
    templateUrl: './products-form-stepe.component.html',
    styleUrl: './products-form-stepe.component.scss'
})
export class ProductsFormStepeComponent {

  @Input() stepsData: staps [];
  @Input() activeSteps: number;

  ngOnChanges(){
    this.stepsData.forEach((data) => {
      if(data.stepNumber < this.activeSteps){
        data.active = true;
      }else{
        data.active = false
      }
    })
  }

}
