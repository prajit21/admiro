import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-image-perview',
  imports: [DropzoneModule],
  templateUrl: './image-perview.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './image-perview.scss',
})
export class ImagePerview {
  imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
  };

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
