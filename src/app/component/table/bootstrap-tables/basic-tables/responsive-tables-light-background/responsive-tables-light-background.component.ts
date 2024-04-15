import { Component } from '@angular/core';
import { responsiveTable } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-responsive-tables-light-background',
  templateUrl: './responsive-tables-light-background.component.html',
  styleUrl: './responsive-tables-light-background.component.scss'
})
export class ResponsiveTablesLightBackgroundComponent {

  public responiveData = responsiveTable;

}
