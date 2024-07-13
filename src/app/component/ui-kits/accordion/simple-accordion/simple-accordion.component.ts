import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { simpleAccordion } from '../../../../shared/data/ui-kits/accordion';

@Component({
  selector: 'app-simple-accordion',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './simple-accordion.component.html',
  styleUrl: './simple-accordion.component.scss'
})
export class SimpleAccordionComponent {

  public simpleAccordionData = simpleAccordion;

}
