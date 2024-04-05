import { Component } from '@angular/core';
import { NoticeBoard } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-notice-board',
  standalone: true,
  imports: [],
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.scss'
})
export class NoticeBoardComponent {

  public noticeBoard = NoticeBoard;

}
