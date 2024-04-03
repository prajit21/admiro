import { Component } from '@angular/core';
import { TransitionHistory } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-transition-history',
  standalone: true,
  imports: [],
  templateUrl: './transition-history.component.html',
  styleUrl: './transition-history.component.scss'
})
export class TransitionHistoryComponent {

  public transitionHistory = TransitionHistory;

}
