import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
    selector: 'app-justify-content-dropdown',
    imports: [CommonModule, NgbModule],
    templateUrl: './justify-content-dropdown.html',
    styleUrl: './justify-content-dropdown.scss'
})
export class JustifyContentDropdown {

  public justifyData = Data.JustifyContents;

}
