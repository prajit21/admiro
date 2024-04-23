import { Component, HostListener } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';
import { NavmenuService } from '../../../services/navmenu.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  constructor(public layout: LayoutService, public navmenu: NavmenuService) {
    if ((window.innerWidth < 1185)|| window.innerWidth < 992) {
      navmenu.closeSidebar = true;
    }
    if (window.innerWidth <= 1185) {
      this.layout.config.settings.sidebar_type = 'compact-wrapper'
    } else {
      this.layout.config.settings.sidebar_type = this.layout.config.settings.sidebar_type;
    }

  }

  @HostListener('window:resize', ['$event'])

  onResize() {
    if ((window.innerWidth < 1185)|| window.innerWidth < 992) {
      this.navmenu.closeSidebar = true;
    } else {
      this.navmenu.closeSidebar = false;
    }

    if (window.innerWidth <= 1185) {
      this.layout.config.settings.sidebar_type = 'compact-wrapper';
    } else {
      this.layout.config.settings.sidebar_type = this.layout.config.settings.sidebar_type;
    }


  }

}
