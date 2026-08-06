import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BadgeHeadings } from './badge-headings/badge-headings';
import { BadgesButtons } from './badges-buttons/badges-buttons';
import { CommonBadgePills } from './common-badge-pills/common-badge-pills';
import * as data from '../../../shared/data/ui-kits/tag-pills';

@Component({
  selector: 'app-tag-pills',
  imports: [BadgeHeadings, BadgesButtons, CommonBadgePills],
  templateUrl: './tag-pills.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tag-pills.scss',
})
export class TagPills {
  public BadgesData = data.buttons;
  public PillsData = data.pills;
  public NumberBadgeData = data.NumberBadge;
  public NumberPillsData = data.NumberPillstag;
  public IconBadeData = data.iconbadge;
  public IconpillsData = data.iconpills;
}
