import { Component, ChangeDetectionStrategy } from '@angular/core';

import { OpenModal } from './open-modal/open-modal';
import { ScrollingContent } from './scrolling-content/scrolling-content';
import { Simple } from './simple/simple';
import { TooltipsPopovers } from './tooltips-popovers/tooltips-popovers';

@Component({
  selector: 'app-basic-modal',
  imports: [OpenModal, ScrollingContent, Simple, TooltipsPopovers],
  templateUrl: './basic-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './basic-modal.scss',
})
export class BasicModal {}
