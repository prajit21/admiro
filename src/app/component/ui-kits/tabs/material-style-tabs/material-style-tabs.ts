import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { descriptionData, reviewData, userDetailsData } from '../../../../shared/data/ui-kits/tab';

@Component({
  selector: 'app-material-style-tabs',
  imports: [NgbModule],
  templateUrl: './material-style-tabs.html',
  styleUrl: './material-style-tabs.scss',
})
export class MaterialStyleTabs {
  public active = 1;
  public userDetailsData = userDetailsData;
  public descriptionData = descriptionData;
  public reviewData = reviewData;
}
