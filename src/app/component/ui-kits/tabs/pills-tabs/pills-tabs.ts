import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pills-tabs',
  imports: [CommonModule, NgbModule],
  templateUrl: './pills-tabs.html',
  styleUrl: './pills-tabs.scss',
})
export class PillsTabs {
  public active = 3;
}
