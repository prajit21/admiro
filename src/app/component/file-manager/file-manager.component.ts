import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FileItemComponent } from './file-item/file-item.component';
import { FileManagerSidebarComponent } from './file-manager-sidebar/file-manager-sidebar.component';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [CommonModule, FileItemComponent, FileManagerSidebarComponent],
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.scss'
})
export class FileManagerComponent {

}
