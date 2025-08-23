import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { inlineStyle } from '../../../../../shared/data/form-controls/mega-options';

@Component({
  selector: 'app-inline-style',
  imports: [CommonModule],
  templateUrl: './inline-style.html',
  styleUrl: './inline-style.scss',
})
export class InlineStyle {
  public inlineData = inlineStyle;
}
