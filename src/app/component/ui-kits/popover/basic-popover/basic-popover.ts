import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-popover',
  imports: [CommonModule, NgbModule],
  templateUrl: './basic-popover.html',
  styleUrl: './basic-popover.scss',
})
export class BasicPopover {}
