import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicTooltipComponent } from './basic-tooltip/basic-tooltip.component';
import { ColoredTooltipComponent } from './colored-tooltip/colored-tooltip.component';
import { FilledTooltipComponent } from './filled-tooltip/filled-tooltip.component';
import { HtmlElementsClickEventComponent } from './html-elements-click-event/html-elements-click-event.component';
import { TooltipDirectionsComponent } from './tooltip-directions/tooltip-directions.component';

@Component({
    selector: 'app-tooltip',
    imports: [CommonModule, BasicTooltipComponent, ColoredTooltipComponent, FilledTooltipComponent,
        HtmlElementsClickEventComponent, TooltipDirectionsComponent],
    templateUrl: './tooltip.component.html',
    styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {

}
