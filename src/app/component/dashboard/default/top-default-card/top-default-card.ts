import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-default-card',
  imports: [CommonModule],
  templateUrl: './top-default-card.html',
  styleUrl: './top-default-card.scss',
})
export class TopDefaultCard {
  public time = new Date();
  public intervalId: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
