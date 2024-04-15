import { Component } from '@angular/core';
import { Alert, OutlineDarkAlert } from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-outline-alert',
  templateUrl: './outline-alert.component.html',
  styleUrl: './outline-alert.component.scss'
})
export class OutlineAlertComponent {

  public outlinealertData = OutlineDarkAlert;

  close(outlineitem: Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }

}
