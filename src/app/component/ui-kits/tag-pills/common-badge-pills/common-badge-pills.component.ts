import { Component, Input } from '@angular/core';
import { button } from '../../../../shared/data/ui-kits/tag-pills';

@Component({
  selector: 'app-common-badge-pills',
  templateUrl: './common-badge-pills.component.html',
  styleUrl: './common-badge-pills.component.scss'
})
export class CommonBadgePillsComponent {

  @Input() data: button[];

}
