import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-coming-bg-video',
    imports: [CommonModule],
    templateUrl: './coming-bg-video.component.html',
    styleUrl: './coming-bg-video.component.scss'
})
export class ComingBgVideoComponent {

  public seconds: number;
  public interval: any

  constructor() {
    this.interval = setInterval(function (this: any) {
      let currentDate = new Date();
      currentDate.setHours(0);  // Set the desired hours
      currentDate.setMinutes(0); // Set the desired minutes
      currentDate.setSeconds(0);

      let nowDate = new Date();
      let daysToAdd = 7;
      currentDate.setDate(currentDate.getDate() + daysToAdd);
      let distance = currentDate.getTime() - nowDate.getTime();
      this.document.querySelectorAll('#days').forEach((element: { innerHTML: Number }) => {
        element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      });

      this.document.querySelectorAll('#hours').forEach((element: { innerHTML: Number }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      });

      this.document.querySelectorAll('#minutes').forEach((element: { innerHTML: Number }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      });

      this.document.querySelectorAll('#seconds').forEach((element: { innerHTML: Number }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
      });
    }, this.seconds);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
