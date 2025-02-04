import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-left-border-alert',
    imports: [CommonModule],
    templateUrl: './left-border-alert.component.html',
    styleUrl: './left-border-alert.component.scss'
})
export class LeftBorderAlertComponent {

  public alerts3: boolean = true;

  close3() {
    this.alerts3 = false;
  }

}
