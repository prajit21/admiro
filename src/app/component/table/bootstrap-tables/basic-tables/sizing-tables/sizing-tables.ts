import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { sizingTable } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-sizing-tables',
  imports: [CommonModule],
  templateUrl: './sizing-tables.html',
  styleUrl: './sizing-tables.scss',
})
export class SizingTables {
  public sizingData = sizingTable;
}
