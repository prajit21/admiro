import { Component } from '@angular/core';
import { variationTimeline } from '../../../../shared/data/bonus-ui/timeline';

@Component({
  selector: 'app-variation-timeline',
  templateUrl: './variation-timeline.component.html',
  styleUrl: './variation-timeline.component.scss'
})
export class VariationTimelineComponent {

  public variationTimelineData = variationTimeline;

}
