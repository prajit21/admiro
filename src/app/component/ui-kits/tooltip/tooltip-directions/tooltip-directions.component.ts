import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-directions',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './tooltip-directions.component.html',
  styleUrl: './tooltip-directions.component.scss'
})
export class TooltipDirectionsComponent {

}
