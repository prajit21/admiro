import { Component } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-image-perview',
  templateUrl: './image-perview.component.html',
  styleUrl: './image-perview.component.scss'
})
export class ImagePerviewComponent {
  
  imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
  };

  onUploadError(args: DropzoneConfigInterface): void {
 
  }

  onUploadSuccess(args: DropzoneConfigInterface): void {

  }

}
