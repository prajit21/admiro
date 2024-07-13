import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-color-alert-outline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-alert-outline.component.html',
  styleUrl: './color-alert-outline.component.scss'
})
export class ColorAlertOutlineComponent {

  public outlinealertData = data.OutlineDarkAlert;

  close(outlineitem: data.Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }

}
