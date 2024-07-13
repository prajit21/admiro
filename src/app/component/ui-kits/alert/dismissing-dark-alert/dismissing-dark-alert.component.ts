import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dismissing-dark-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dismissing-dark-alert.component.html',
  styleUrl: './dismissing-dark-alert.component.scss'
})
export class DismissingDarkAlertComponent {

  public alerts: boolean = true;

  close() {
    this.alerts = false;
  }

}
