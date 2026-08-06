import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { Alert, OutlineDarkAlert } from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-outline-alert',
  imports: [Feathericon],
  templateUrl: './outline-alert.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './outline-alert.scss',
})
export class OutlineAlert {
  public outlinealertData = OutlineDarkAlert;

  close(outlineitem: Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }
}
