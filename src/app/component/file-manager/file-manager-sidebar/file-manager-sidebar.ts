import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-file-manager-sidebar',
    imports: [CommonModule, ClickOutsideDirective, Feathericon],
    templateUrl: './file-manager-sidebar.html',
    styleUrl: './file-manager-sidebar.scss'
})
export class FileManagerSidebar {

  public open: boolean = false;

  openFilter() {
    this.open = !this.open
  }

  clickOutside():void { 
    this.open = false;
  }
  
}
