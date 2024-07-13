import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-justify-content-dropdown',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './justify-content-dropdown.component.html',
  styleUrl: './justify-content-dropdown.component.scss'
})
export class JustifyContentDropdownComponent {

  public justifyData = Data.JustifyContents;

}
