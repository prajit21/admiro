import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-split-dropdown',
    imports: [CommonModule, NgbModule, FeathericonComponent],
    templateUrl: './split-dropdown.component.html',
    styleUrl: './split-dropdown.component.scss'
})
export class SplitDropdownComponent {

  public splitDropdownData = Data.SplitDropdown;

}
