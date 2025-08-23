import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-dropdown',
  imports: [CommonModule, NgbModule],
  templateUrl: './input-dropdown.html',
  styleUrl: './input-dropdown.scss',
})
export class InputDropdown {}
