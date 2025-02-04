import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-buttons-with-prefix-postfix',
    imports: [CommonModule],
    templateUrl: './buttons-with-prefix-postfix.component.html',
    styleUrl: './buttons-with-prefix-postfix.component.scss'
})
export class ButtonsWithPrefixPostfixComponent {

  public counter: number[] = [0, 0];

  public increment(i: number) {
    if (i === 0 || i === 1) {
      this.counter[i] += 1;
    }
  }

  public decrement(i: number) {
    if (i === 0 || i === 1) {
      if (this.counter[i] > 0) {
        this.counter[i] -= 1;
      }
    }
  }

}
