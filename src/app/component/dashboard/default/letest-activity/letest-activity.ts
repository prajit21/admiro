import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LatestActivity } from '../../../../shared/data/dashboard/default/default';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-letest-activity',
  imports: [CommonModule, ClickOutsideDirective, RouterModule],
  templateUrl: './letest-activity.html',
  styleUrl: './letest-activity.scss',
})
export class LetestActivity {
  public letestActivity = LatestActivity;
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
