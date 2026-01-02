import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-single-file-upload',
  imports: [DropzoneModule],
  templateUrl: './single-file-upload.html',
  styleUrl: './single-file-upload.scss',
})
export class SingleFileUpload {
  public Config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    clickable: true,
    uploadMultiple: false,
    maxFiles: 1,
    addRemoveLinks: true,
  };
  public text =
    '<div class="dz-message needsclick"><i class="fa-solid fa-cloud-arrow-up"></i><h6 class="f-w-600">Drop files here or click to upload.</h6><span class="note needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span></div>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
