import { DatePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-default-card',
  imports: [DatePipe],
  templateUrl: './top-default-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
