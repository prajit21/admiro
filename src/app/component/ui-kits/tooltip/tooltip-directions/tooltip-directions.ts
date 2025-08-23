import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-directions',
  imports: [CommonModule, NgbModule],
  templateUrl: './tooltip-directions.html',
  styleUrl: './tooltip-directions.scss',
})
export class TooltipDirections {}
