import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-layout-type',
  templateUrl: './layout-type.component.html',
  styleUrl: './layout-type.component.scss'
})
export class LayoutTypeComponent {

  public layoutType: string = 'ltr';

  constructor(public layoutService: LayoutService) { }

  customizeLayoutType(val: string) {
    this.layoutType = val;
    this.layoutService.config.settings.layout_type = val;
    if (val == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body.className = 'rtl';
    } else if (val == 'box-layout') {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body.className = 'box-layout';
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      document.body.className = '';
    }
  }

}
