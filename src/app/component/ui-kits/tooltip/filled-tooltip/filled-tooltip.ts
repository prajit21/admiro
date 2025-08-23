import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filled-tooltip',
  imports: [CommonModule, NgbModule],
  templateUrl: './filled-tooltip.html',
  styleUrl: './filled-tooltip.scss',
})
export class FilledTooltip {}
