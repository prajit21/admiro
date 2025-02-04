import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
    selector: 'app-multi-file-upload',
    imports: [CommonModule, DropzoneModule],
    templateUrl: './multi-file-upload.component.html',
    styleUrl: './multi-file-upload.component.scss'
})
export class MultiFileUploadComponent {

  public Config: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    uploadMultiple: true,
    addRemoveLinks: true,
  };
  public text='<div class="dz-message needsclick"><i class="fa-solid fa-cloud-arrow-up"></i><h6 class="f-w-600">Drop files here or click to upload.</h6><span class="note needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span></div>'

  onUploadError(args: DropzoneConfigInterface): void {
  }

  onUploadSuccess(args: DropzoneConfigInterface): void {
  }

}
