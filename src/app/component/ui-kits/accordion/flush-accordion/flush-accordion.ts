import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlushAccordions } from '../../../../shared/data/ui-kits/accordion';

@Component({
  selector: 'app-flush-accordion',
  imports: [CommonModule, NgbModule],
  templateUrl: './flush-accordion.html',
  styleUrl: './flush-accordion.scss',
})
export class FlushAccordion {
  public flushAccordionData = FlushAccordions;
}
