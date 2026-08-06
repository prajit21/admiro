import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-border-tabs',
  imports: [NgbModule],
  templateUrl: './border-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './border-tabs.scss',
})
export class BorderTabs {
  public active = 2;
}
