import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicTimelineComponent } from './basic-timeline/basic-timeline.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { HoveringTimelineComponent } from './hovering-timeline/hovering-timeline.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { VariationTimelineComponent } from './variation-timeline/variation-timeline.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, BasicTimelineComponent, HorizontalTimelineComponent, HoveringTimelineComponent
    , TimelineChartComponent, VariationTimelineComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

}
