import { Component } from '@angular/core';
import { PrimaryBackground } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-inverse-table-primary-background',
  templateUrl: './inverse-table-primary-background.component.html',
  styleUrl: './inverse-table-primary-background.component.scss'
})
export class InverseTablePrimaryBackgroundComponent {

  public primaryData = PrimaryBackground;

}
