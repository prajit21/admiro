import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VerticalStylel } from '../../../../../shared/data/form-controls/mega-options';

@Component({
  selector: 'app-vertical-style',
  imports: [CommonModule, FormsModule],
  templateUrl: './vertical-style.html',
  styleUrl: './vertical-style.scss',
})
export class VerticalStyle {
  public verticalstyleData = VerticalStylel;
}
