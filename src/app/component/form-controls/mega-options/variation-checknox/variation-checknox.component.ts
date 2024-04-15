import { Component } from '@angular/core';
import { checkBox, themeSales } from '../../../../shared/data/form-controls/mega-options';

@Component({
  selector: 'app-variation-checknox',
  templateUrl: './variation-checknox.component.html',
  styleUrl: './variation-checknox.component.scss'
})
export class VariationChecknoxComponent {

  public checkboxData = checkBox;
  public themeData = themeSales;

}
