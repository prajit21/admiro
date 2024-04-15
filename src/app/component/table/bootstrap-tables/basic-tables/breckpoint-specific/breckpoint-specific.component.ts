import { Component } from '@angular/core';
import { breckpointSpecific } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-breckpoint-specific',
  templateUrl: './breckpoint-specific.component.html',
  styleUrl: './breckpoint-specific.component.scss'
})
export class BreckpointSpecificComponent {

  public breckpointData = breckpointSpecific;

}
