import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { breckpointSpecific } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-breckpoint-specific',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breckpoint-specific.component.html',
  styleUrl: './breckpoint-specific.component.scss'
})
export class BreckpointSpecificComponent {

  public breckpointData = breckpointSpecific;

}
