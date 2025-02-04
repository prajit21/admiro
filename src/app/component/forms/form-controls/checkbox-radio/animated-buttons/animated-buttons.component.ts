import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { soicaMidia, paymentData } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-animated-buttons',
    imports: [CommonModule, FormsModule],
    templateUrl: './animated-buttons.component.html',
    styleUrl: './animated-buttons.component.scss'
})
export class AnimatedButtonsComponent {

  public SoicalmidiaData = soicaMidia;
  public payment = paymentData;

}
