import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { checkBox, themeSales } from '../../../../../shared/data/form-controls/mega-options';

@Component({
  selector: 'app-variation-checknox',
  imports: [FormsModule],
  templateUrl: './variation-checknox.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './variation-checknox.scss',
})
export class VariationChecknox {
  public checkboxData = checkBox;
  public themeData = themeSales;
}
