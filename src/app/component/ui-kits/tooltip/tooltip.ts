import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BasicTooltip } from './basic-tooltip/basic-tooltip';
import { ColoredTooltip } from './colored-tooltip/colored-tooltip';
import { FilledTooltip } from './filled-tooltip/filled-tooltip';
import { HtmlElementsClickEvent } from './html-elements-click-event/html-elements-click-event';
import { TooltipDirections } from './tooltip-directions/tooltip-directions';

@Component({
  selector: 'app-tooltip',
  imports: [
    CommonModule,
    BasicTooltip,
    ColoredTooltip,
    FilledTooltip,
    HtmlElementsClickEvent,
    TooltipDirections,
  ],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
})
export class Tooltip {}
