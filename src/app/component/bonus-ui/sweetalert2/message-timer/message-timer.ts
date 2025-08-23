import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-message-timer',
  imports: [CommonModule],
  templateUrl: './message-timer.html',
  styleUrl: './message-timer.scss',
})
export class MessageTimer {
  message() {
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,

      didOpen: () => {
        Swal.showLoading();
        const popup = Swal.getPopup();
        const timer = popup ? popup.querySelector('b') : null;
        if (timer) {
          void setInterval(() => {
            if (timer) {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }
          }, 100);
        }
      },
    }).then(result => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }
}
