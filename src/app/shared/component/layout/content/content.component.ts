import { Component, HostListener } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';
import { NavmenuService } from '../../../services/navmenu.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  constructor(  public layout:LayoutService ,public navmenu:NavmenuService){}

  @HostListener('window:resize', ['$event'])

  onResize(event: number) {
    this.navmenu.closeSidebar = window.innerWidth < 1200 ? true : false;
    if (window.innerWidth < 1200) {
      this.layout.config.settings.sidebar_type = 'compact-wrapper sidebar-open'
    }
  }

}
