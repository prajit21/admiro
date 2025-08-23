import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-colored-tooltip',
  imports: [CommonModule, NgbModule],
  templateUrl: './colored-tooltip.html',
  styleUrl: './colored-tooltip.scss',
})
export class ColoredTooltip {}
