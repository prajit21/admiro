import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover-offset',
  imports: [CommonModule, NgbModule],
  templateUrl: './popover-offset.html',
  styleUrl: './popover-offset.scss',
})
export class PopoverOffset {}
