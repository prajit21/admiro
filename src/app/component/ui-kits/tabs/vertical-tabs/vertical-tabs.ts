import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-tabs',
  imports: [NgbModule],
  templateUrl: './vertical-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './vertical-tabs.scss',
})
export class VerticalTabs {
  public active = 2;
}
