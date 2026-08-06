import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CommonInfoCard } from './common-info-card/common-info-card';
import { DarkColorCard } from './dark-color-card/dark-color-card';
import { TopCommonCard } from './top-common-card/top-common-card';

@Component({
  selector: 'app-basic-card',
  imports: [CommonInfoCard, DarkColorCard, TopCommonCard],
  templateUrl: './basic-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './basic-card.scss',
})
export class BasicCard {}
