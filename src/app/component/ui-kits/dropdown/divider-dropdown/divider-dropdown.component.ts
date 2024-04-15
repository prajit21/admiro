import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-divider-dropdown',
  templateUrl: './divider-dropdown.component.html',
  styleUrl: './divider-dropdown.component.scss'
})
export class DividerDropdownComponent {

  public dividerdropdownData = Data.DividerDropdown;

}
