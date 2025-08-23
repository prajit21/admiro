import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dark-dropdown',
  imports: [CommonModule, NgbModule],
  templateUrl: './dark-dropdown.html',
  styleUrl: './dark-dropdown.scss',
})
export class DarkDropdown {}
