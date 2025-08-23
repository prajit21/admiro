import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-alignments',
  imports: [CommonModule, NgbModule],
  templateUrl: './alignments.html',
  styleUrl: './alignments.scss',
})
export class Alignments {
  public alignmentsDropdownData = Data.AlignmentsDropdown;
}
