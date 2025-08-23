import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { horizontalTimeline } from '../../../../shared/data/bonus-ui/timeline';

@Component({
  selector: 'app-horizontal-timeline',
  imports: [CommonModule],
  templateUrl: './horizontal-timeline.html',
  styleUrl: './horizontal-timeline.scss',
})
export class HorizontalTimeline {
  public horizontalTimelineData = horizontalTimeline;
}
