import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomProgressbars } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-custom-progress-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-progress-bars.component.html',
  styleUrl: './custom-progress-bars.component.scss'
})
export class CustomProgressBarsComponent {

  public customprogressData = CustomProgressbars;

}
