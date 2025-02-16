import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { customHover } from '../../../../../shared/data/table/basic-tables';

@Component({
    selector: 'app-hover-stripped-table',
    imports: [CommonModule],
    templateUrl: './hover-stripped-table.component.html',
    styleUrl: './hover-stripped-table.component.scss'
})
export class HoverStrippedTableComponent {

  public customhoverData = customHover;

}
