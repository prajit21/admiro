import { Component } from '@angular/core';
import { soicaMidia, paymentData } from '../../../../shared/data/form-controls/checkbox-radio';

@Component({
  selector: 'app-animated-buttons',
  templateUrl: './animated-buttons.component.html',
  styleUrl: './animated-buttons.component.scss'
})
export class AnimatedButtonsComponent {

  public SoicalmidiaData = soicaMidia;
  public payment = paymentData;

}
