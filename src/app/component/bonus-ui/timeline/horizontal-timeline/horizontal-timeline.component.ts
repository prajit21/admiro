import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { horizontalTimeline } from '../../../../shared/data/bonus-ui/timeline';

@Component({
    selector: 'app-horizontal-timeline',
    imports: [CommonModule],
    templateUrl: './horizontal-timeline.component.html',
    styleUrl: './horizontal-timeline.component.scss'
})
export class HorizontalTimelineComponent {

  public horizontalTimelineData = horizontalTimeline;

}
