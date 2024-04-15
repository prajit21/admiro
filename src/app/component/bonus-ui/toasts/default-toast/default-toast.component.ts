import { Component } from '@angular/core';

@Component({
  selector: 'app-default-toast',
  templateUrl: './default-toast.component.html',
  styleUrl: './default-toast.component.scss'
})
export class DefaultToastComponent {

  public default: boolean = true;

  close() {
    this.default = false;
  }

}
