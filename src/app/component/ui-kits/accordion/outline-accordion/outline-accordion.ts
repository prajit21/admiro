import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OutlineAccordions } from '../../../../shared/data/ui-kits/accordion';

@Component({
  selector: 'app-outline-accordion',
  imports: [NgbModule],
  templateUrl: './outline-accordion.html',
  styleUrl: './outline-accordion.scss',
})
export class OutlineAccordion {
  public OutlineAccordionData = OutlineAccordions;
}
