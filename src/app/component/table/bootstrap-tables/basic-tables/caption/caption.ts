import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { caption } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-caption',
  imports: [CommonModule],
  templateUrl: './caption.html',
  styleUrl: './caption.scss',
})
export class Caption {
  public captionData = caption;
}
