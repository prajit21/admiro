import { Component } from '@angular/core';
import { outlinedtouchspin } from '../../../../shared/data/forms-widgets/touchspin';

@Component({
  selector: 'app-outlined-touchspin',
  templateUrl: './outlined-touchspin.component.html',
  styleUrl: './outlined-touchspin.component.scss'
})
export class OutlinedTouchspinComponent {

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
