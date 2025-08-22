import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
    selector: 'app-alignments',
    imports: [CommonModule, NgbModule],
    templateUrl: './alignments.html',
    styleUrl: './alignments.scss'
})
export class Alignments {

  public alignmentsDropdownData = Data.AlignmentsDropdown;

}
