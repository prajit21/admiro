import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OpenModal } from './open-modal/open-modal';
import { ScrollingContent } from './scrolling-content/scrolling-content';
import { TooltipsPopovers } from './tooltips-popovers/tooltips-popovers';
import { Simple } from './simple/simple';

@Component({
    selector: 'app-basic-modal',
    imports: [CommonModule, OpenModal, ScrollingContent, Simple,
        TooltipsPopovers],
    templateUrl: './basic-modal.html',
    styleUrl: './basic-modal.scss'
})
export class BasicModal {

}
