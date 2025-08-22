import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { checkBox, themeSales } from '../../../../../shared/data/form-controls/mega-options';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-variation-checknox',
    imports: [CommonModule, FormsModule],
    templateUrl: './variation-checknox.html',
    styleUrl: './variation-checknox.scss'
})
export class VariationChecknox {

  public checkboxData = checkBox;
  public themeData = themeSales;

}
