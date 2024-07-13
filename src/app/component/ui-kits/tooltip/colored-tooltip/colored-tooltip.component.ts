import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-colored-tooltip',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './colored-tooltip.component.html',
  styleUrl: './colored-tooltip.component.scss'
})
export class ColoredTooltipComponent {

}
