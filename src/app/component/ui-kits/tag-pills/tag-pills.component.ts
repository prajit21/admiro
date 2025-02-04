import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as  data from '../../../shared/data/ui-kits/tag-pills';
import { BadgeHeadingsComponent } from './badge-headings/badge-headings.component';
import { BadgesButtonsComponent } from './badges-buttons/badges-buttons.component';
import { CommonBadgePillsComponent } from './common-badge-pills/common-badge-pills.component';

@Component({
    selector: 'app-tag-pills',
    imports: [CommonModule, BadgeHeadingsComponent, BadgesButtonsComponent, CommonBadgePillsComponent],
    templateUrl: './tag-pills.component.html',
    styleUrl: './tag-pills.component.scss'
})
export class TagPillsComponent {

  public BadgesData = data.buttons;
  public PillsData = data.pills;
  public NumberBadgeData = data.NumberBadge;
  public NumberPillsData = data.NumberPillstag;
  public IconBadeData = data.iconbadge;
  public IconpillsData = data.iconpills;

}
