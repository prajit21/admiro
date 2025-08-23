import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PrimaryBackground } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-inverse-table-primary-background',
  imports: [CommonModule],
  templateUrl: './inverse-table-primary-background.html',
  styleUrl: './inverse-table-primary-background.scss',
})
export class InverseTablePrimaryBackground {
  public primaryData = PrimaryBackground;
}
