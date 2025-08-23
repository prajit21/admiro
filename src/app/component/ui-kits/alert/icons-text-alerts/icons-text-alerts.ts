import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as data from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-icons-text-alerts',
  imports: [CommonModule],
  templateUrl: './icons-text-alerts.html',
  styleUrl: './icons-text-alerts.scss',
})
export class IconsTextAlerts {
  public icontextData = data.IconandTextAlert;

  close(icontextitem: data.Icons) {
    this.icontextData.splice(this.icontextData.indexOf(icontextitem), 1);
  }
}
