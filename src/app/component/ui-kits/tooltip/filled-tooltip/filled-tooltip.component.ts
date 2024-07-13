import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filled-tooltip',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './filled-tooltip.component.html',
  styleUrl: './filled-tooltip.component.scss'
})
export class FilledTooltipComponent {

}
