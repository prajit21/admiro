import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Listcheckbox } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-checkbox-lists',
  imports: [],
  templateUrl: './checkbox-lists.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './checkbox-lists.scss',
})
export class CheckboxLists {
  public listsCheckboxData = Listcheckbox;
}
