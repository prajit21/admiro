import { Component } from '@angular/core';
import { LatestActivity } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-letest-activity',
  templateUrl: './letest-activity.component.html',
  styleUrl: './letest-activity.component.scss'
})
export class LetestActivityComponent {

  public letestActivity = LatestActivity;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
