import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslucentToasts } from '../../../../shared/data/bonus-ui/toasts';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-translucent-toast',
    imports: [CommonModule, Feathericon],
    templateUrl: './translucent-toast.html',
    styleUrl: './translucent-toast.scss'
})
export class TranslucentToast {

  public TranslucentToastsData = TranslucentToasts;

  close(value: number) {
    const items = this.TranslucentToastsData.filter(v => v.id == value)
    items[0].data = false;
  }

}
