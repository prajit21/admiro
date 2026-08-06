import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sizing-dropdown',
  imports: [NgbModule],
  templateUrl: './sizing-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sizing-dropdown.scss',
})
export class SizingDropdown {}
