import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-helper-dropdown',
  templateUrl: './helper-dropdown.component.html',
  styleUrl: './helper-dropdown.component.scss'
})
export class HelperDropdownComponent {

  public helpercardData = Data.HelperCard;

}
