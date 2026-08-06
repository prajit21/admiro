import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TransitionHistoryItem } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-transition-history',
  imports: [RouterModule],
  templateUrl: './transition-history.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './transition-history.scss',
})
export class TransitionHistory {
  public transitionHistory = TransitionHistoryItem;
}
