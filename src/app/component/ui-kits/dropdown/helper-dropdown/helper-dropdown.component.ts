import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
    selector: 'app-helper-dropdown',
    imports: [CommonModule, NgbModule],
    templateUrl: './helper-dropdown.component.html',
    styleUrl: './helper-dropdown.component.scss'
})
export class HelperDropdownComponent {

  public helpercardData = Data.HelperCard;

}
