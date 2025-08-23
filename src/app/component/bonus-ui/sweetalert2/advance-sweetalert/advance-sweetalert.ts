import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-advance-sweetalert',
  imports: [CommonModule],
  templateUrl: './advance-sweetalert.html',
  styleUrl: './advance-sweetalert.scss',
})
export class AdvanceSweetalert {
  Questions() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  toast() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully',
    });
  }
}
