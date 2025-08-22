import { Component } from '@angular/core';
import { outlinedtouchspin } from '../../../../../shared/data/forms-widgets/touchspin';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-outlined-touchspin',
    imports: [CommonModule],
    templateUrl: './outlined-touchspin.html',
    styleUrl: './outlined-touchspin.scss'
})
export class OutlinedTouchspin {

  public OutlinedData = outlinedtouchspin;

  decrement(i: number) {
    if (this.OutlinedData[i].value > 0) {
      this.OutlinedData[i].value -= 1;
    }
  }
  increment(i: number) {
    this.OutlinedData[i].value += 1;
  }

}
