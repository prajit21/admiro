import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';
import {
  VariationRadiopayment,
  VariationsWebdesign,
  variationsIcons,
} from '../../../../../shared/data/form-controls/mega-options';

@Component({
  selector: 'app-variation-radio',
  imports: [FormsModule, Feathericon],
  templateUrl: './variation-radio.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './variation-radio.scss',
})
export class VariationRadio {
  public paymentData = VariationRadiopayment;
  public webdesignData = VariationsWebdesign;
  public iconsData = variationsIcons;
}
