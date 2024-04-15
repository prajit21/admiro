import { Component } from '@angular/core';
import { switchSizeing } from '../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-switch-sizing',
  templateUrl: './switch-sizing.component.html',
  styleUrl: './switch-sizing.component.scss'
})
export class SwitchSizingComponent {

  public sizeingData = switchSizeing;

}
