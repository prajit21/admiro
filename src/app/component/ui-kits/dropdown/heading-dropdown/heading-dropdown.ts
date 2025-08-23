import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heading-dropdown',
  imports: [CommonModule, NgbModule],
  templateUrl: './heading-dropdown.html',
  styleUrl: './heading-dropdown.scss',
})
export class HeadingDropdown {}
