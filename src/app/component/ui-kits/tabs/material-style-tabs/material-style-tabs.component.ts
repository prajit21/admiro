import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { descriptionData, reviewData, userDetailsData } from '../../../../shared/data/ui-kits/tab';

@Component({
    selector: 'app-material-style-tabs',
    imports: [CommonModule, NgbModule],
    templateUrl: './material-style-tabs.component.html',
    styleUrl: './material-style-tabs.component.scss'
})
export class MaterialStyleTabsComponent {

  public active = 1;
  public userDetailsData = userDetailsData;
  public descriptionData = descriptionData;
  public reviewData = reviewData;

}
