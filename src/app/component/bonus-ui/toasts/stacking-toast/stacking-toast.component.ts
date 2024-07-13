import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackingToasts } from '../../../../shared/data/bonus-ui/toasts';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-stacking-toast',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './stacking-toast.component.html',
  styleUrl: './stacking-toast.component.scss'
})
export class StackingToastComponent {

  public stackingData = StackingToasts;

  close(value: number) {
    const items = this.stackingData.filter(v => v.id == value)
    items[0].data = false;
  }

}
