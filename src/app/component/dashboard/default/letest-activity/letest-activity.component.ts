import { Component } from '@angular/core';
import { LatestActivity } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-letest-activity',
  standalone: true,
  imports: [CommonModule,ClickOutsideDirective,RouterModule],
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
