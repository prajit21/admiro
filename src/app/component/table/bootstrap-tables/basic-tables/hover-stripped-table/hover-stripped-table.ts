import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { customHover } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-hover-stripped-table',
  imports: [CommonModule],
  templateUrl: './hover-stripped-table.html',
  styleUrl: './hover-stripped-table.scss',
})
export class HoverStrippedTable {
  public customhoverData = customHover;
}
