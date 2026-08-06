import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { defaultswitch } from '../../../../../shared/data/form-controls/checkbox-radio';

@Component({
  selector: 'app-default-switch',
  imports: [FormsModule],
  templateUrl: './default-switch.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './default-switch.scss',
})
export class DefaultSwitch {
  public switches = defaultswitch;
}
