import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-tooltip',
  imports: [CommonModule, NgbModule],
  templateUrl: './basic-tooltip.html',
  styleUrl: './basic-tooltip.scss',
})
export class BasicTooltip {}
