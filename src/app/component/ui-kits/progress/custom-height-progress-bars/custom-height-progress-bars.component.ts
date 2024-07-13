import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { customheightprogress } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-custom-height-progress-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-height-progress-bars.component.html',
  styleUrl: './custom-height-progress-bars.component.scss'
})
export class CustomHeightProgressBarsComponent {

  public customheightData = customheightprogress;

}
