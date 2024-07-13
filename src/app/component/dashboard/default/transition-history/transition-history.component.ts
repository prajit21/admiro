import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransitionHistory } from '../../../../shared/data/dashboard/default/default';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transition-history',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './transition-history.component.html',
  styleUrl: './transition-history.component.scss'
})
export class TransitionHistoryComponent {

  public transitionHistory = TransitionHistory;

}
