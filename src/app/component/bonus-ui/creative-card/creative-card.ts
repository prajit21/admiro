import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BorderPrimaryState } from './border-primary-state/border-primary-state';
import { BorderSecondaryState } from './border-secondary-state/border-secondary-state';
import { BorderWarningState } from './border-warning-state/border-warning-state';
import { CommonBorderCard } from './common-border-card/common-border-card';
import { CommonBottomCard } from './common-bottom-card/common-bottom-card';

@Component({
  selector: 'app-creative-card',
  imports: [
    BorderPrimaryState,
    BorderSecondaryState,
    BorderWarningState,
    CommonBorderCard,
    CommonBottomCard,
  ],
  templateUrl: './creative-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './creative-card.scss',
})
export class CreativeCard {}
