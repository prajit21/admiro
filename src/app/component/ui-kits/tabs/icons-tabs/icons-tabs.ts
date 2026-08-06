import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icons-tabs',
  imports: [NgbModule],
  templateUrl: './icons-tabs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './icons-tabs.scss',
})
export class IconsTabs {
  public active = 1;
}
