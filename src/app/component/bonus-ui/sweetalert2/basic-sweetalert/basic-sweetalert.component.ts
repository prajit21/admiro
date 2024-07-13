import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basic-sweetalert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-sweetalert.component.html',
  styleUrl: './basic-sweetalert.component.scss'
})
export class BasicSweetalertComponent {

  basicAlert() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonColor: 'var(--theme-default)',
    })
  }

  withTitle() {
    Swal.fire({
      title: "It's Magic!",
      text: 'Thank you for visiting  Admiro theme',
      confirmButtonColor: 'var(--theme-default)',
    })
  }

  informational(){
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
      confirmButtonColor: 'var(--theme-default)',
    })
  }

  withCancelled() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

}
