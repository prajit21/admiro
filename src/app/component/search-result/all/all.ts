import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { allData } from '../../../shared/data/search-result/search-result';

@Component({
  selector: 'app-all',
  imports: [CommonModule],
  templateUrl: './all.html',
  styleUrl: './all.scss',
})
export class All {
  public allData = allData;
}
