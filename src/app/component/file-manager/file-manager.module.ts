import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerRoutingModule } from './file-manager-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { FileManagerComponent } from './file-manager.component';
import { FileItemComponent } from './file-item/file-item.component';
import { FileManagerSidebarComponent } from './file-manager-sidebar/file-manager-sidebar.component';

@NgModule({
  declarations: [
    FileManagerComponent,
    FileItemComponent,
    FileManagerSidebarComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedModule
  ]
})
export class FileManagerModule { }
