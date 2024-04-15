import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-basic-dropdown',
  templateUrl: './basic-dropdown.component.html',
  styleUrl: './basic-dropdown.component.scss'
})
export class BasicDropdownComponent {

  public basicDropdownData = Data.basicDropdown;

}
