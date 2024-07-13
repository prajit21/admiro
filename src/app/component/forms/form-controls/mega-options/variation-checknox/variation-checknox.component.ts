import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { checkBox, themeSales } from '../../../../../shared/data/form-controls/mega-options';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-variation-checknox',
  standalone: true,
  imports: [CommonModule,FormsModule],  
  templateUrl: './variation-checknox.component.html',
  styleUrl: './variation-checknox.component.scss'
})
export class VariationChecknoxComponent {

  public checkboxData = checkBox;
  public themeData = themeSales;

}
