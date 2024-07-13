import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-icons-text-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons-text-alerts.component.html',
  styleUrl: './icons-text-alerts.component.scss'
})
export class IconsTextAlertsComponent {

  public icontextData = data.IconandTextAlert;

  close(icontextitem: data.Icons) {
    this.icontextData.splice(this.icontextData.indexOf(icontextitem), 1);
  }


}
