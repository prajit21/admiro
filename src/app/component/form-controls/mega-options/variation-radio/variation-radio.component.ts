import { Component } from '@angular/core';
import { VariationRadiopayment, VariationsWebdesign, variationsIcons } from '../../../../shared/data/form-controls/mega-options';

@Component({
  selector: 'app-variation-radio',
  templateUrl: './variation-radio.component.html',
  styleUrl: './variation-radio.component.scss'
})
export class VariationRadioComponent {

  public paymentData = VariationRadiopayment;
  public webdesignData = VariationsWebdesign;
  public iconsData = variationsIcons;

}
