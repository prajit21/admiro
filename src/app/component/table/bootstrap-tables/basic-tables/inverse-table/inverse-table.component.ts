import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InverseTable } from '../../../../../shared/data/table/basic-tables';

@Component({
    selector: 'app-inverse-table',
    imports: [CommonModule],
    templateUrl: './inverse-table.component.html',
    styleUrl: './inverse-table.component.scss'
})
export class InverseTableComponent {

  public inversetableData = InverseTable;

}
