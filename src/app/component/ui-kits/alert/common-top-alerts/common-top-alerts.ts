import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { alert } from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-common-top-alerts',
  imports: [CommonModule],
  templateUrl: './common-top-alerts.html',
  styleUrl: './common-top-alerts.scss',
})
export class CommonTopAlerts {
  readonly data = input<alert[]>();
}
