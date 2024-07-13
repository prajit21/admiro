import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { OutlineAccordion } from '../../../../shared/data/ui-kits/accordion';

@Component({
  selector: 'app-outline-accordion',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './outline-accordion.component.html',
  styleUrl: './outline-accordion.component.scss'
})
export class OutlineAccordionComponent {

  public OutlineAccordionData = OutlineAccordion;

}
