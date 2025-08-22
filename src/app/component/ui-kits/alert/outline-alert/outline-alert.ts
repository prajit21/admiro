import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Alert, OutlineDarkAlert } from '../../../../shared/data/ui-kits/alert';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-outline-alert',
    imports: [CommonModule, Feathericon],
    templateUrl: './outline-alert.html',
    styleUrl: './outline-alert.scss'
})
export class OutlineAlert {

  public outlinealertData = OutlineDarkAlert;

  close(outlineitem: Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }

}
