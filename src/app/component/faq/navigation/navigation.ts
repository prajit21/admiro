import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { navigationData1 } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-navigation',
  imports: [Feathericon],
  templateUrl: './navigation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './navigation.scss',
})
export class Navigation {
  public navigationData = navigationData1;
}
