import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { variationTimeline } from '../../../../shared/data/bonus-ui/timeline';

@Component({
  selector: 'app-variation-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './variation-timeline.component.html',
  styleUrl: './variation-timeline.component.scss'
})
export class VariationTimelineComponent {

  public variationTimelineData = variationTimeline;

}
