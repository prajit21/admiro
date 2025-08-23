import { CommonModule } from '@angular/common';
import { Component, output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-products-gallery',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropzoneModule],
  templateUrl: './products-gallery.html',
  styleUrl: './products-gallery.scss',
})
export class ProductsGallery {
  public activeStep: number = 2;
  public text =
    ' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';

  readonly activeSteps = output<number>();

  private fb = inject(FormBuilder);

  myForm = new FormGroup({});

  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public config2: DropzoneConfigInterface = {
    acceptedFiles: 'image/*,gif',
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
  };

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}

  next(_myForm: FormGroup) {
    const number = this.activeStep + 1;
    this.activeSteps.emit(number);
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
