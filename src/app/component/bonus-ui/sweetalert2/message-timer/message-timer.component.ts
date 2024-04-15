import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-message-timer',
  templateUrl: './message-timer.component.html',
  styleUrl: './message-timer.component.scss'
})
export class MessageTimerComponent {

  message() {
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
    
      didOpen: () => {
        Swal.showLoading();
        const popup = Swal.getPopup();
        const timer = popup ? popup.querySelector("b") : null;
        if (timer) {
          const timerInterval = setInterval(() => {
            if (timer) {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }
          }, 100);
        }
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    })}

}
