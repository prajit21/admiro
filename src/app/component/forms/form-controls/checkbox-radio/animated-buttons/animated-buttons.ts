import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { soicaMidia, paymentData } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-animated-buttons',
    imports: [CommonModule, FormsModule],
    templateUrl: './animated-buttons.html',
    styleUrl: './animated-buttons.scss'
})
export class AnimatedButtons {

  public SoicalmidiaData = soicaMidia;
  public payment = paymentData;

}
