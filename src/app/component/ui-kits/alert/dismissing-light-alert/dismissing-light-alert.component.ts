import { Component } from '@angular/core';

@Component({
  selector: 'app-dismissing-light-alert',
  templateUrl: './dismissing-light-alert.component.html',
  styleUrl: './dismissing-light-alert.component.scss'
})
export class DismissingLightAlertComponent {

  public alerts2: boolean = true;

  close2() {
    this.alerts2 = false;
  }

}