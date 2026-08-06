import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NoticeBoards } from '../../../../shared/data/dashboard/education/education';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-notice-board',
  imports: [ClickOutsideDirective],
  templateUrl: './notice-board.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './notice-board.scss',
})
export class NoticeBoard {
  public noticeBoard = NoticeBoards;
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
