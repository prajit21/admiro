import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sizing-dropdown',
  imports: [CommonModule, NgbModule],
  templateUrl: './sizing-dropdown.html',
  styleUrl: './sizing-dropdown.scss',
})
export class SizingDropdown {}
