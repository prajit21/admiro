import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-rtl-support',
  imports: [CommonModule],
  templateUrl: './rtl-support.html',
  styleUrl: './rtl-support.scss',
})
export class RtlSupport {
  rtl() {
    Swal.fire({
      title: 'هل تريد الاستمرار؟',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCancelButton: true,
      showCloseButton: true,
    });
  }
}
