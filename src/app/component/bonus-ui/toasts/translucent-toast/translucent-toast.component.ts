import { Component } from '@angular/core';
import { TranslucentToasts } from '../../../../shared/data/bonus-ui/toasts';

@Component({
  selector: 'app-translucent-toast',
  templateUrl: './translucent-toast.component.html',
  styleUrl: './translucent-toast.component.scss'
})
export class TranslucentToastComponent {

  public TranslucentToastsData = TranslucentToasts;

  close(value: number) {
    const items = this.TranslucentToastsData.filter(v => v.id == value)
    items[0].data = false;
  }

}
