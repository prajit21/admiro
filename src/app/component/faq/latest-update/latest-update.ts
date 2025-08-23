import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { LatestUpdates } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-latest-update',
  imports: [CommonModule, Feathericon],
  templateUrl: './latest-update.html',
  styleUrl: './latest-update.scss',
})
export class LatestUpdate {
  public update = LatestUpdates;
}
