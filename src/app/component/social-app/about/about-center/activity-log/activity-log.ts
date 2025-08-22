import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-activity-log',
    imports: [CommonModule, Feathericon],
    templateUrl: './activity-log.html',
    styleUrl: './activity-log.scss'
})
export class ActivityLog {

  public activityLogData = data.activityLog;

}
