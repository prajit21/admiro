import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslucentToasts } from '../../../../shared/data/bonus-ui/toasts';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-translucent-toast',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
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
