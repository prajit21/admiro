import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-alerts-table',
    imports: [CommonModule],
    templateUrl: './alerts-table.component.html',
    styleUrl: './alerts-table.component.scss'
})
export class AlertsTableComponent {

  public alerts: boolean = true;
  public alerts2: boolean = true;

  close() {
    this.alerts = false;
  }

  close2() {
    this.alerts2 = false;
  }


}
