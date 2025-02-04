import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OpenModalComponent } from './open-modal/open-modal.component';
import { ScrollingContentComponent } from './scrolling-content/scrolling-content.component';
import { TooltipsPopoversComponent } from './tooltips-popovers/tooltips-popovers.component';
import { SimpleComponent } from './simple/simple.component';

@Component({
    selector: 'app-basic-modal',
    imports: [CommonModule, OpenModalComponent, ScrollingContentComponent, SimpleComponent,
        TooltipsPopoversComponent],
    templateUrl: './basic-modal.component.html',
    styleUrl: './basic-modal.component.scss'
})
export class BasicModalComponent {

}
