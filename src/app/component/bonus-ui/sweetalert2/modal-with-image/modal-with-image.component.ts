import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-modal-with-image',
    imports: [CommonModule],
    templateUrl: './modal-with-image.component.html',
    styleUrl: './modal-with-image.component.scss'
})
export class ModalWithImageComponent {

  modalImage(){
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }

}
