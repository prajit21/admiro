import { Component } from '@angular/core';
import { tablehead } from '../../../../../shared/data/table//basic-tables';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-table-head-options',
    imports: [CommonModule],
    templateUrl: './table-head-options.html',
    styleUrl: './table-head-options.scss'
})
export class TableHeadOptions {

  public headoptionsData = tablehead;

}
