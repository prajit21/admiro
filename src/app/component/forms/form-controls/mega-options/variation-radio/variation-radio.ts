import { Component } from '@angular/core';
import { VariationRadiopayment, VariationsWebdesign, variationsIcons } from '../../../../../shared/data/form-controls/mega-options';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-variation-radio',
    imports: [CommonModule, FormsModule, Feathericon],
    templateUrl: './variation-radio.html',
    styleUrl: './variation-radio.scss'
})
export class VariationRadio {

  public paymentData = VariationRadiopayment;
  public webdesignData = VariationsWebdesign;
  public iconsData = variationsIcons;

}
