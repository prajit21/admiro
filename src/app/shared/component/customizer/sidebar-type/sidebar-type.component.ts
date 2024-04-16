import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-sidebar-type',
  templateUrl: './sidebar-type.component.html',
  styleUrl: './sidebar-type.component.scss'
})
export class SidebarTypeComponent {

  public sidebarType: string = 'compact-wrapper';
  public screenwidth = window.innerWidth;

  constructor( public layoutService: LayoutService) { }

  customizeSidebarType(val: string) {
    if (this.screenwidth < 1200) {
      if (val == 'horizontal-sidebar') {
        this.layoutService.config.settings.sidebar_type = 'compact-wrapper'
      }
    } else {
      this.sidebarType = val;
      this.layoutService.config.settings.sidebar_type = val;
      this.layoutService.customizer = '';
    }
  }


}