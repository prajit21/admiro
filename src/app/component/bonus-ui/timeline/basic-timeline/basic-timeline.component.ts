import { Component } from '@angular/core';
import { basicTimeline } from '../../../../shared/data/bonus-ui/timeline';

@Component({
  selector: 'app-basic-timeline',
  templateUrl: './basic-timeline.component.html',
  styleUrl: './basic-timeline.component.scss'
})
export class BasicTimelineComponent {

  public basictimelineData = basicTimeline;

}
