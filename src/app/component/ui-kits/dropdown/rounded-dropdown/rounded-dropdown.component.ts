import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-rounded-dropdown',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './rounded-dropdown.component.html',
  styleUrl: './rounded-dropdown.component.scss'
})
export class RoundedDropdownComponent {

  public roundedDropdownData = Data.RoundedDropdown;

}
