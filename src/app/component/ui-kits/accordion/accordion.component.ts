import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimpleAccordionComponent } from './simple-accordion/simple-accordion.component';
import { FlushAccordionComponent } from './flush-accordion/flush-accordion.component';
import { IconsAccordionComponent } from './icons-accordion/icons-accordion.component';
import { MultipleCollapseAccordionComponent } from './multiple-collapse-accordion/multiple-collapse-accordion.component';
import { CollapseAccordionComponent } from './collapse-accordion/collapse-accordion.component';
import { HorizontalAccordionComponent } from './horizontal-accordion/horizontal-accordion.component';
import { OutlineAccordionComponent } from './outline-accordion/outline-accordion.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, SimpleAccordionComponent, FlushAccordionComponent, IconsAccordionComponent,
    MultipleCollapseAccordionComponent, CollapseAccordionComponent, HorizontalAccordionComponent,
    OutlineAccordionComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

}