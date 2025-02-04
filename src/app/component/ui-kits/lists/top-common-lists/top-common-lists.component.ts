import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { topcommonlists } from '../../../../shared/data/ui-kits/lists';

@Component({
    selector: 'app-top-common-lists',
    imports: [CommonModule],
    templateUrl: './top-common-lists.component.html',
    styleUrl: './top-common-lists.component.scss'
})
export class TopCommonListsComponent {

  public commonLists = topcommonlists;

}
