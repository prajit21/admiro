import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Alert, OutlineDarkAlert } from '../../../../shared/data/ui-kits/alert';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-outline-alert',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './outline-alert.component.html',
  styleUrl: './outline-alert.component.scss'
})
export class OutlineAlertComponent {

  public outlinealertData = OutlineDarkAlert;

  close(outlineitem: Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }

}
