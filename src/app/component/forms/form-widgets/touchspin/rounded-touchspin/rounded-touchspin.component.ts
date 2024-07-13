import { Component } from '@angular/core';
import { roundedtouchspin } from '../../../../../shared/data/forms-widgets/touchspin';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rounded-touchspin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rounded-touchspin.component.html',
  styleUrl: './rounded-touchspin.component.scss'
})
export class RoundedTouchspinComponent {

  public roundedData = roundedtouchspin;

  decrement(i: number) {
    if (this.roundedData[i].value > 0) {
      this.roundedData[i].value -= 1;
    }
  }
  increment(i: number) {
    this.roundedData[i].value += 1;
  }

}
