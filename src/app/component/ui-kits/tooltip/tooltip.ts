import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BasicTooltip } from './basic-tooltip/basic-tooltip';
import { ColoredTooltip } from './colored-tooltip/colored-tooltip';
import { FilledTooltip } from './filled-tooltip/filled-tooltip';
import { HtmlElementsClickEvent } from './html-elements-click-event/html-elements-click-event';
import { TooltipDirections } from './tooltip-directions/tooltip-directions';

@Component({
  selector: 'app-tooltip',
  imports: [BasicTooltip, ColoredTooltip, FilledTooltip, HtmlElementsClickEvent, TooltipDirections],
  templateUrl: './tooltip.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tooltip.scss',
})
export class Tooltip {}
