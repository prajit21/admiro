import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Listcheckbox } from '../../../../shared/data/ui-kits/lists';

@Component({
    selector: 'app-checkbox-lists',
    imports: [CommonModule],
    templateUrl: './checkbox-lists.component.html',
    styleUrl: './checkbox-lists.component.scss'
})
export class CheckboxListsComponent {

  public listsCheckboxData = Listcheckbox;

}
