import { CommonModule } from '@angular/common';
import * as fileData from '../../../shared/data/file-manager/file-manager';
import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-file-item',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './file-item.component.html',
  styleUrl: './file-item.component.scss'
})
export class FileItemComponent {

  public active = 1;
  public Quickdata = fileData.Quickdata;
  public FoldersData = fileData.FoldersData;
  public FilesData = fileData.FilesData;

}
