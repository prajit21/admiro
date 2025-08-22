import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransitionHistoryItem } from '../../../../shared/data/dashboard/default/default';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-transition-history',
    imports: [CommonModule, RouterModule],
    templateUrl: './transition-history.html',
    styleUrl: './transition-history.scss'
})
export class TransitionHistory {

  public transitionHistory = TransitionHistoryItem;

}
