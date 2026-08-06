import { Component, ChangeDetectionStrategy } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-rtl-support',
  imports: [],
  templateUrl: './rtl-support.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
