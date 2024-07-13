import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DisabledLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-disabled-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disabled-lists.component.html',
  styleUrl: './disabled-lists.component.scss'
})
export class DisabledListsComponent {

  public disableData = DisabledLists;

}
