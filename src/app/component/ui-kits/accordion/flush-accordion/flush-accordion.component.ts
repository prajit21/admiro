import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { FlushAccordion } from '../../../../shared/data/ui-kits/accordion';

@Component({
    selector: 'app-flush-accordion',
    imports: [CommonModule, NgbModule],
    templateUrl: './flush-accordion.component.html',
    styleUrl: './flush-accordion.component.scss'
})
export class FlushAccordionComponent {

  public flushAccordionData = FlushAccordion;

}
