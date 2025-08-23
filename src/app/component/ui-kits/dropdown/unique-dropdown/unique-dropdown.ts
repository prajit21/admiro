import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-unique-dropdown',
  imports: [CommonModule, NgbModule],
  templateUrl: './unique-dropdown.html',
  styleUrl: './unique-dropdown.scss',
})
export class UniqueDropdown {}
