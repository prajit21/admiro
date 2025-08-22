import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineCenter } from './timeline-center/timeline-center';
import { TimelineRight } from './timeline-right/timeline-right';
import { TimelineLeft } from './timeline-left/timeline-left';

@Component({
    selector: 'app-timeline',
    imports: [CommonModule, TimelineCenter, TimelineRight, TimelineLeft],
    templateUrl: './timeline.html',
    styleUrl: './timeline.scss'
})
export class Timeline {

}
