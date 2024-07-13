import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-divider-dropdown',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './divider-dropdown.component.html',
  styleUrl: './divider-dropdown.component.scss'
})
export class DividerDropdownComponent {

  public dividerdropdownData = Data.DividerDropdown;

}
