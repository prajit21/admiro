import { Component } from '@angular/core';
import { tablehead } from '../../../../../shared/data/table//basic-tables';

@Component({
  selector: 'app-table-head-options',
  templateUrl: './table-head-options.component.html',
  styleUrl: './table-head-options.component.scss'
})
export class TableHeadOptionsComponent {

  public headoptionsData = tablehead;

}
