import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-tooltip',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './basic-tooltip.component.html',
  styleUrl: './basic-tooltip.component.scss'
})
export class BasicTooltipComponent {

}
