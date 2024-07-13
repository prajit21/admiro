import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-image-perview',
  standalone: true,
  imports: [CommonModule,DropzoneModule],
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
