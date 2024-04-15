import { Component } from '@angular/core';
import { simpleAccordion } from '../../../../shared/data/ui-kits/accordion';

@Component({
  selector: 'app-simple-accordion',
  templateUrl: './simple-accordion.component.html',
  styleUrl: './simple-accordion.component.scss'
})
export class SimpleAccordionComponent {

  public simpleAccordionData = simpleAccordion;

}
