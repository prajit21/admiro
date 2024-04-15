import { Component } from '@angular/core';
import { IconandTextAlert, Icons } from '../../../../shared/data/ui-kits/alert';

@Component({
  selector: 'app-alert-with-icons',
  templateUrl: './alert-with-icons.component.html',
  styleUrl: './alert-with-icons.component.scss'
})
export class AlertWithIconsComponent {

  public icontextData = IconandTextAlert;

  close(icontextitem: Icons) {
    this.icontextData.splice(this.icontextData.indexOf(icontextitem), 1);
  }

}
