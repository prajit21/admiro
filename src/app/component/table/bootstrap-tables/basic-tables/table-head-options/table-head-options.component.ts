import { Component } from '@angular/core';
import { tablehead } from '../../../../../shared/data/table//basic-tables';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-head-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-head-options.component.html',
  styleUrl: './table-head-options.component.scss'
})
export class TableHeadOptionsComponent {

  public headoptionsData = tablehead;

}
