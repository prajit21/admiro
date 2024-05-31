import { Component } from '@angular/core';

@Component({
  selector: 'app-top-default-card',
  templateUrl: './top-default-card.component.html',
  styleUrl: './top-default-card.component.scss'
})
export class TopDefaultCardComponent {

  public time = new Date();
  public intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
