import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sizingTable } from '../../../../../shared/data/table/basic-tables';

@Component({
    selector: 'app-sizing-tables',
    imports: [CommonModule],
    templateUrl: './sizing-tables.component.html',
    styleUrl: './sizing-tables.component.scss'
})
export class SizingTablesComponent {

  public sizingData = sizingTable;

}
