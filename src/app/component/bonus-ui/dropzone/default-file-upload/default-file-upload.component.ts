import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
    selector: 'app-default-file-upload',
    imports: [CommonModule, DropzoneModule],
    templateUrl: './default-file-upload.component.html',
    styleUrl: './default-file-upload.component.scss'
})
export class DefaultFileUploadComponent {

  public Config: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };
 

  onUploadError(args: DropzoneConfigInterface): void {
  
  }

  onUploadSuccess(args: DropzoneConfigInterface): void {

  }


}
