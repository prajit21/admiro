import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-split-dropdown',
    imports: [CommonModule, NgbModule, Feathericon],
    templateUrl: './split-dropdown.html',
    styleUrl: './split-dropdown.scss'
})
export class SplitDropdown {

  public splitDropdownData = Data.SplitDropdown;

}
