import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dismissing-light-alert',
  imports: [NgClass],
  templateUrl: './dismissing-light-alert.html',
  styleUrl: './dismissing-light-alert.scss',
})
export class DismissingLightAlert {
  public alerts2: boolean = true;

  close2() {
    this.alerts2 = false;
  }
}
