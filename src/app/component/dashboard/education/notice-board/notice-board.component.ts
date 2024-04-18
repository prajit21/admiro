import { Component } from '@angular/core';
import { NoticeBoard } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.scss'
})
export class NoticeBoardComponent {

  public noticeBoard = NoticeBoard;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
