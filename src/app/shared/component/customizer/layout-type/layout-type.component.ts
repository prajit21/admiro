import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-layout-type',
    imports: [CommonModule, FormsModule],
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
      document.body?.classList.remove("box-layout")
    } else if (val == 'box-layout') {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      document.body?.classList.add("box-layout")
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.body?.classList.remove("box-layout")
    }
  }

}
