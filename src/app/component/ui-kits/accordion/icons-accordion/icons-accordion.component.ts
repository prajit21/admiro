import { Component } from '@angular/core';
import { IconsAccordion } from '../../../../shared/data/ui-kits/accordion';

@Component({
  selector: 'app-icons-accordion',
  templateUrl: './icons-accordion.component.html',
  styleUrl: './icons-accordion.component.scss'
})
export class IconsAccordionComponent {

  public iconaccordionData = IconsAccordion;

}
