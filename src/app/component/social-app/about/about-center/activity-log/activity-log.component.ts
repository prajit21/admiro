import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-activity-log',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './activity-log.component.html',
    styleUrl: './activity-log.component.scss'
})
export class ActivityLogComponent {

  public activityLogData = data.activityLog;

}
