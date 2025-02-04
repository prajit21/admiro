import { Component } from '@angular/core';
import { VariationRadiopayment, VariationsWebdesign, variationsIcons } from '../../../../../shared/data/form-controls/mega-options';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-variation-radio',
    imports: [CommonModule, FormsModule, FeathericonComponent],
    templateUrl: './variation-radio.component.html',
    styleUrl: './variation-radio.component.scss'
})
export class VariationRadioComponent {

  public paymentData = VariationRadiopayment;
  public webdesignData = VariationsWebdesign;
  public iconsData = variationsIcons;

}
