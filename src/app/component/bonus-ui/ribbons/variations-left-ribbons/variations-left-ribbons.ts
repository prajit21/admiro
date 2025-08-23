import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LeftRibbons } from '../../../../shared/data/bonus-ui/ribbons';

@Component({
  selector: 'app-variations-left-ribbons',
  imports: [CommonModule],
  templateUrl: './variations-left-ribbons.html',
  styleUrl: './variations-left-ribbons.scss',
})
export class VariationsLeftRibbons {
  public leftRibbonsData = LeftRibbons;
}
