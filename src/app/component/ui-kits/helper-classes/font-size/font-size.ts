import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FontSizes } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-font-size',
  imports: [CommonModule],
  templateUrl: './font-size.html',
  styleUrl: './font-size.scss',
})
export class FontSize {
  public fonstSizeData = FontSizes;
}
