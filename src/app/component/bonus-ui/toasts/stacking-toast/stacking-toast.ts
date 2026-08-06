import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { StackingToasts } from '../../../../shared/data/bonus-ui/toasts';

@Component({
  selector: 'app-stacking-toast',
  imports: [Feathericon],
  templateUrl: './stacking-toast.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './stacking-toast.scss',
})
export class StackingToast {
  public stackingData = StackingToasts;

  close(value: number) {
    const items = this.stackingData.filter(v => v.id == value);
    items[0].data = false;
  }
}
