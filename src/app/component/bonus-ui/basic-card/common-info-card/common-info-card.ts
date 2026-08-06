import { Component, ChangeDetectionStrategy } from '@angular/core';

import { commonInfoData } from '../../../../shared/data/bonus-ui/basic-card';

@Component({
  selector: 'app-common-info-card',
  imports: [],
  templateUrl: './common-info-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common-info-card.scss',
})
export class CommonInfoCard {
  public InfoData = commonInfoData;
}
