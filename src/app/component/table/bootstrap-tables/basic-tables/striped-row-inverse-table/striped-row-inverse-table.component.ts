import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StripedData } from '../../../../../shared/data/table/basic-tables';

@Component({
    selector: 'app-striped-row-inverse-table',
    imports: [CommonModule],
    templateUrl: './striped-row-inverse-table.component.html',
    styleUrl: './striped-row-inverse-table.component.scss'
})
export class StripedRowInverseTableComponent {

  public striped = StripedData;

}
