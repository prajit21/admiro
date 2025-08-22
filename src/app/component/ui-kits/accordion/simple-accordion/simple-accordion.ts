import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { simpleAccordion } from '../../../../shared/data/ui-kits/accordion';

@Component({
    selector: 'app-simple-accordion',
    imports: [CommonModule, NgbModule],
    templateUrl: './simple-accordion.html',
    styleUrl: './simple-accordion.scss'
})
export class SimpleAccordion {

  public simpleAccordionData = simpleAccordion;

}
