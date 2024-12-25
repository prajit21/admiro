import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-products-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropzoneModule],
  templateUrl: './products-gallery.component.html',
  styleUrl: './products-gallery.component.scss'
})
export class ProductsGalleryComponent {

  public activeStep: number = 2;
  public text = ' <div class="dz-message needsclick"><i class="icon-cloud-up"></i><p>Drop files here or click to upload.</p></div>';

  @Output() activeSteps = new EventEmitter<number>();

  constructor(private fb: FormBuilder) { }


  myForm = new FormGroup({
  });



  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public config2: DropzoneConfigInterface = {
    acceptedFiles: "image/*,gif",
    url: 'https://httpbin.org/post',
    addRemoveLinks: true
  };


  onUploadError(args: DropzoneConfigInterface): void { }

  onUploadSuccess(args: DropzoneConfigInterface): void { }

  next(myForm: FormGroup) {
    const number = this.activeStep + 1;
    this.activeSteps.emit(number);
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

}
