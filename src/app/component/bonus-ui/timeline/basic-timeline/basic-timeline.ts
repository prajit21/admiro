import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { basicTimeline } from '../../../../shared/data/bonus-ui/timeline';

@Component({
  selector: 'app-basic-timeline',
  imports: [CommonModule],
  templateUrl: './basic-timeline.html',
  styleUrl: './basic-timeline.scss',
})
export class BasicTimeline {
  public basictimelineData = basicTimeline;
}
