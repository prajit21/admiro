import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-add-post',
  standalone: true,
  imports: [CommonModule, AngularEditorModule, FormsModule, DropzoneModule, NgSelectModule],
  templateUrl: './blog-add-post.component.html',
  styleUrl: './blog-add-post.component.scss'
})
export class BlogAddPostComponent {

  public selectedCityIds: string[] = [];
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];
  public htmlContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  public cities2 = [
    { id: 1, name: 'LifeStyle' },
    { id: 2, name: 'Travel' },
  ];

  public Config: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    autoProcessQueue: false,
    addRemoveLinks: true,
    parallelUploads: 1,
  };
  
  public text = '<div class="dz-message needsclick"><i class="fa-solid fa-cloud-arrow-up"></i><h6 class="f-w-600">Drop files here or click to upload.</h6><span class="note needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span></div>'

  onUploadError(args: DropzoneConfigInterface): void {

  }

  onUploadSuccess(args: DropzoneConfigInterface): void {

  }


}
