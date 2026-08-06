import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { alert } from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-common-top-alerts',
  imports: [],
  templateUrl: './common-top-alerts.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-top-alerts.scss',
})
export class CommonTopAlerts {
  readonly data = input<alert[]>();
}
