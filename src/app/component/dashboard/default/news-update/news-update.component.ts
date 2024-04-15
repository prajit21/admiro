import { Component } from '@angular/core';
import { newsupdate } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrl: './news-update.component.scss'
})
export class NewsUpdateComponent {

  public NewsUpdate = newsupdate;

}
