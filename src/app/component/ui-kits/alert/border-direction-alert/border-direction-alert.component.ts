import { Component } from '@angular/core';
import * as data from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-border-direction-alert',
  templateUrl: './border-direction-alert.component.html',
  styleUrl: './border-direction-alert.component.scss'
})
export class BorderDirectionAlertComponent {

  public DircationData = data.DirectionAlert;

  close(Dircationitem: data.Alert) {
    this.DircationData.splice(this.DircationData.indexOf(Dircationitem), 1);
  }

}
