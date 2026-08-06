import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-material-style-left-tabs',
  imports: [NgbModule, Feathericon],
  templateUrl: './material-style-left-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './material-style-left-tabs.scss',
})
export class MaterialStyleLeftTabs {
  public active = 1;
}
