import { Component } from '@angular/core';

@Component({
  selector: 'app-file-manager-sidebar',
  templateUrl: './file-manager-sidebar.component.html',
  styleUrl: './file-manager-sidebar.component.scss'
})
export class FileManagerSidebarComponent {

  public open: boolean = false;

  openFilter() {
    this.open = !this.open
  }

  clickOutside():void { 
    this.open = false;
  }
  
}
