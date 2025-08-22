import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimpleAccordion } from './simple-accordion/simple-accordion';
import { FlushAccordion } from './flush-accordion/flush-accordion';
import { IconsAccordion } from './icons-accordion/icons-accordion';
import { MultipleCollapseAccordion } from './multiple-collapse-accordion/multiple-collapse-accordion';
import { CollapseAccordion } from './collapse-accordion/collapse-accordion';
import { HorizontalAccordion } from './horizontal-accordion/horizontal-accordion';
import { OutlineAccordion } from './outline-accordion/outline-accordion';

@Component({
    selector: 'app-accordion',
    imports: [CommonModule, SimpleAccordion, FlushAccordion, IconsAccordion,
        MultipleCollapseAccordion, CollapseAccordion, HorizontalAccordion,
        OutlineAccordion
    ],
    templateUrl: './accordion.html',
    styleUrl: './accordion.scss'
})
export class Accordion {

}