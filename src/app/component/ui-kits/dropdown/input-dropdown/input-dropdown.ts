import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-dropdown',
  imports: [NgbModule],
  templateUrl: './input-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './input-dropdown.scss',
})
export class InputDropdown {}
