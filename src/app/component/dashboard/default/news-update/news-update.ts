import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { newsupdate } from '../../../../shared/data/dashboard/default/default';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-news-update',
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: './news-update.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './news-update.scss',
})
export class NewsUpdate {
  public NewsUpdate = newsupdate;

  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
