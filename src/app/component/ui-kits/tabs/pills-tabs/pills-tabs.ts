import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pills-tabs',
  imports: [NgbModule],
  templateUrl: './pills-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './pills-tabs.scss',
})
export class PillsTabs {
  public active = 3;
}
