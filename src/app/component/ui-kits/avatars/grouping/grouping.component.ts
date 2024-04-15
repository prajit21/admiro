import { Component } from '@angular/core';
import { Grouping } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrl: './grouping.component.scss'
})
export class GroupingComponent {

  public groupingdata = Grouping;

}
