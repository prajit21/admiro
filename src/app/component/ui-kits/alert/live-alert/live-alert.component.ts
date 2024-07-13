import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-live-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-alert.component.html',
  styleUrl: './live-alert.component.scss'
})
export class LiveAlertComponent {

  public showLog = false;
  public counter: number = 0;
  public array: number[] = []
  public alerts2: boolean = true;

  onShowLog() {
    this.showLog = true;
    this.counter++;
    this.array.push(this.counter);
  }

  close(Data: number) {
    this.array.splice(this.array.indexOf(Data), 1);
  }

  close2() {
    this.alerts2 = false;
  }

}
