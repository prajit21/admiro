import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rtl-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rtl-support.component.html',
  styleUrl: './rtl-support.component.scss'
})
export class RtlSupportComponent {

  rtl(){
    Swal.fire({
      title: "هل تريد الاستمرار؟",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true
    });
  }

}
