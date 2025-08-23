import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { IconandTextAlert, Icons } from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-alert-with-icons',
  imports: [CommonModule],
  templateUrl: './alert-with-icons.html',
  styleUrl: './alert-with-icons.scss',
})
export class AlertWithIcons {
  public icontextData = IconandTextAlert;

  close(icontextitem: Icons) {
    this.icontextData.splice(this.icontextData.indexOf(icontextitem), 1);
  }
}
