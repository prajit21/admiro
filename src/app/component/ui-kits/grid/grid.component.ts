import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { GridOptionComponent } from './grid-option/grid-option.component';
import { HorizontalAlignmentComponent } from './horizontal-alignment/horizontal-alignment.component';
import { NestingComponent } from './nesting/nesting.component';
import { OffsetComponent } from './offset/offset.component';
import { OrderComponent } from './order/order.component';
import { VerticalAlignmentComponent } from './vertical-alignment/vertical-alignment.component';

@Component({
    selector: 'app-grid',
    imports: [CommonModule, GridColumnComponent, GridOptionComponent, HorizontalAlignmentComponent,
        NestingComponent, OffsetComponent, OrderComponent, VerticalAlignmentComponent],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.scss'
})
export class GridComponent {

}
