import { Component } from '@angular/core';
import { Turnover } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-trun-over',
  templateUrl: './trun-over.component.html',
  styleUrl: './trun-over.component.scss'
})
export class TrunOverComponent {

  public TurnOverChart = Turnover;

}
