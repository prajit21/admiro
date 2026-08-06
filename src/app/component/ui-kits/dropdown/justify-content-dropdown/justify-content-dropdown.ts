import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-justify-content-dropdown',
  imports: [NgbModule],
  templateUrl: './justify-content-dropdown.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './justify-content-dropdown.scss',
})
export class JustifyContentDropdown {
  public justifyData = Data.JustifyContents;
}
