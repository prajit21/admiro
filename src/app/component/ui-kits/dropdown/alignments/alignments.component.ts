import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-alignments',
  templateUrl: './alignments.component.html',
  styleUrl: './alignments.component.scss'
})
export class AlignmentsComponent {

  public alignmentsDropdownData = Data.AlignmentsDropdown;

}
